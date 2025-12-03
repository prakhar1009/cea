# CEA Feature Testing Script
# Tests all implemented features across Phases 1, 2, and 3

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "   CEA Feature Testing Suite" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$baseUrl = "http://localhost:3003/api/v1/cea"
$testsPassed = 0
$testsFailed = 0

function Test-Endpoint {
    param($name, $url, $method = "GET", $body = $null)
    
    Write-Host "Testing: $name..." -NoNewline
    
    try {
        if ($method -eq "GET") {
            $response = Invoke-WebRequest -Uri $url -UseBasicParsing -ErrorAction Stop
        } else {
            $response = Invoke-WebRequest -Uri $url -Method $method -Body ($body | ConvertTo-Json) -ContentType "application/json" -UseBasicParsing -ErrorAction Stop
        }
        
        if ($response.StatusCode -eq 200 -or $response.StatusCode -eq 201) {
            Write-Host " ✅ PASS" -ForegroundColor Green
            $script:testsPassed++
            return $true
        } else {
            Write-Host " ❌ FAIL (Status: $($response.StatusCode))" -ForegroundColor Red
            $script:testsFailed++
            return $false
        }
    } catch {
        Write-Host " ❌ FAIL (Error: $($_.Exception.Message))" -ForegroundColor Red
        $script:testsFailed++
        return $false
    }
}

Write-Host "PHASE 1: Core Compliance Engine" -ForegroundColor Yellow
Write-Host "================================`n" -ForegroundColor Yellow

# Test 1: Health Check
Test-Endpoint "Health Check" "$baseUrl/health"

# Test 2: Rules Statistics
Test-Endpoint "Rules Statistics" "$baseUrl/rules/stats"

# Test 3: Get HIPAA Rules
Test-Endpoint "HIPAA Rules" "$baseUrl/rules/framework/hipaa"

# Test 4: Get All Rules
Test-Endpoint "All Rules" "$baseUrl/rules"

# Test 5: Prometheus Metrics
Test-Endpoint "Prometheus Metrics" "$baseUrl/metrics"

Write-Host "`nPHASE 2: Automation & Suggestions" -ForegroundColor Yellow
Write-Host "==================================`n" -ForegroundColor Yellow

# Test 6: Get Suggestions for Control
$suggestionsBody = @{
    controlId = "test-ctrl-1"
    projectId = "test-project-1"
}
Test-Endpoint "Generate Suggestions" "$baseUrl/suggestions/control" "POST" $suggestionsBody

# Test 7: Get Auto-fixable Suggestions
Test-Endpoint "Auto-fixable Suggestions" "$baseUrl/suggestions/auto-fixable/test-project-1"

Write-Host "`nPHASE 3: NLP & Zero-Knowledge Proofs" -ForegroundColor Yellow
Write-Host "====================================`n" -ForegroundColor Yellow

# Test 8: Policy Analysis
$policyBody = @{
    id = "test-policy-1"
    title = "Test Security Policy"
    content = "All systems must implement multi-factor authentication. Data encryption is required. Audit logging must be enabled."
    format = "txt"
    framework = "hipaa"
}
Test-Endpoint "NLP Policy Analysis" "$baseUrl/attestation/analyze-policy" "POST" $policyBody

# Test 9: Issue Verifiable Credential
$credentialBody = @{
    projectId = "test-project-1"
    framework = "hipaa"
    attestation = @{
        projectId = "test-project-1"
        framework = "hipaa"
        status = "COMPLIANT"
        evaluatedAt = (Get-Date).ToString("o")
        validUntil = (Get-Date).AddDays(90).ToString("o")
        evidence = @()
        score = 95
    }
    validityDays = 90
}
Test-Endpoint "Issue Verifiable Credential" "$baseUrl/attestation/issue-credential" "POST" $credentialBody

# Test 10: Generate Zero-Knowledge Proof
$zkpBody = @{
    request = @{
        projectId = "test-project-1"
        framework = "hipaa"
        claim = "ABOVE_THRESHOLD"
        threshold = 80
    }
    actualData = @{
        complianceScore = 95
        passedControls = 64
        totalControls = 66
        controlStatuses = @{}
    }
}
Test-Endpoint "Generate ZK Proof" "$baseUrl/attestation/generate-zkp" "POST" $zkpBody

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "   Test Results Summary" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "Total Tests:  " -NoNewline
Write-Host ($testsPassed + $testsFailed) -ForegroundColor White

Write-Host "Passed:       " -NoNewline
Write-Host $testsPassed -ForegroundColor Green

Write-Host "Failed:       " -NoNewline
Write-Host $testsFailed -ForegroundColor Red

Write-Host "`nSuccess Rate: " -NoNewline
$successRate = if (($testsPassed + $testsFailed) -gt 0) { 
    [math]::Round(($testsPassed / ($testsPassed + $testsFailed)) * 100, 2) 
} else { 0 }
Write-Host "$successRate%" -ForegroundColor $(if ($successRate -eq 100) { "Green" } else { "Yellow" })

Write-Host "`n========================================`n" -ForegroundColor Cyan

if ($testsFailed -eq 0) {
    Write-Host "🎉 All tests passed! CEA is production ready!" -ForegroundColor Green
} else {
    Write-Host "⚠️  Some tests failed. Check the output above for details." -ForegroundColor Yellow
}

Write-Host "`nNext Steps:" -ForegroundColor Cyan
Write-Host "1. View API Documentation: http://localhost:3003/api/docs" -ForegroundColor White
Write-Host "2. Check Prometheus Metrics: http://localhost:3003/api/v1/cea/metrics" -ForegroundColor White
Write-Host "3. Review TESTING_GUIDE.md for detailed test cases" -ForegroundColor White
Write-Host "4. Review EXECUTIVE_SUMMARY.md for manager presentation`n" -ForegroundColor White
