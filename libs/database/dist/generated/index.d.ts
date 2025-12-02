
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Framework
 * 
 */
export type Framework = $Result.DefaultSelection<Prisma.$FrameworkPayload>
/**
 * Model Control
 * 
 */
export type Control = $Result.DefaultSelection<Prisma.$ControlPayload>
/**
 * Model ControlEvaluation
 * 
 */
export type ControlEvaluation = $Result.DefaultSelection<Prisma.$ControlEvaluationPayload>
/**
 * Model EvaluationRun
 * 
 */
export type EvaluationRun = $Result.DefaultSelection<Prisma.$EvaluationRunPayload>
/**
 * Model Fact
 * 
 */
export type Fact = $Result.DefaultSelection<Prisma.$FactPayload>
/**
 * Model PolicySegment
 * 
 */
export type PolicySegment = $Result.DefaultSelection<Prisma.$PolicySegmentPayload>
/**
 * Model VcStatus
 * 
 */
export type VcStatus = $Result.DefaultSelection<Prisma.$VcStatusPayload>
/**
 * Model Suggestion
 * 
 */
export type Suggestion = $Result.DefaultSelection<Prisma.$SuggestionPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TierType: {
  FREE: 'FREE',
  TEAM: 'TEAM',
  ENTERPRISE: 'ENTERPRISE'
};

export type TierType = (typeof TierType)[keyof typeof TierType]


export const Criticality: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type Criticality = (typeof Criticality)[keyof typeof Criticality]


export const ControlStatus: {
  PASS: 'PASS',
  FAIL: 'FAIL',
  MANUAL: 'MANUAL',
  NOT_APPLICABLE: 'NOT_APPLICABLE',
  NOT_EVALUATED: 'NOT_EVALUATED'
};

export type ControlStatus = (typeof ControlStatus)[keyof typeof ControlStatus]


export const VcState: {
  VALID: 'VALID',
  EXPIRED: 'EXPIRED',
  REVOKED: 'REVOKED'
};

export type VcState = (typeof VcState)[keyof typeof VcState]


export const SuggestionType: {
  POLICY: 'POLICY',
  CONFIG: 'CONFIG',
  CODE: 'CODE'
};

export type SuggestionType = (typeof SuggestionType)[keyof typeof SuggestionType]


export const Confidence: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type Confidence = (typeof Confidence)[keyof typeof Confidence]


export const SuggestionStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  APPLIED: 'APPLIED',
  REJECTED: 'REJECTED'
};

export type SuggestionStatus = (typeof SuggestionStatus)[keyof typeof SuggestionStatus]

}

export type TierType = $Enums.TierType

export const TierType: typeof $Enums.TierType

export type Criticality = $Enums.Criticality

export const Criticality: typeof $Enums.Criticality

export type ControlStatus = $Enums.ControlStatus

export const ControlStatus: typeof $Enums.ControlStatus

export type VcState = $Enums.VcState

export const VcState: typeof $Enums.VcState

export type SuggestionType = $Enums.SuggestionType

export const SuggestionType: typeof $Enums.SuggestionType

export type Confidence = $Enums.Confidence

export const Confidence: typeof $Enums.Confidence

export type SuggestionStatus = $Enums.SuggestionStatus

export const SuggestionStatus: typeof $Enums.SuggestionStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.framework`: Exposes CRUD operations for the **Framework** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Frameworks
    * const frameworks = await prisma.framework.findMany()
    * ```
    */
  get framework(): Prisma.FrameworkDelegate<ExtArgs>;

  /**
   * `prisma.control`: Exposes CRUD operations for the **Control** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Controls
    * const controls = await prisma.control.findMany()
    * ```
    */
  get control(): Prisma.ControlDelegate<ExtArgs>;

  /**
   * `prisma.controlEvaluation`: Exposes CRUD operations for the **ControlEvaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ControlEvaluations
    * const controlEvaluations = await prisma.controlEvaluation.findMany()
    * ```
    */
  get controlEvaluation(): Prisma.ControlEvaluationDelegate<ExtArgs>;

  /**
   * `prisma.evaluationRun`: Exposes CRUD operations for the **EvaluationRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EvaluationRuns
    * const evaluationRuns = await prisma.evaluationRun.findMany()
    * ```
    */
  get evaluationRun(): Prisma.EvaluationRunDelegate<ExtArgs>;

  /**
   * `prisma.fact`: Exposes CRUD operations for the **Fact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facts
    * const facts = await prisma.fact.findMany()
    * ```
    */
  get fact(): Prisma.FactDelegate<ExtArgs>;

  /**
   * `prisma.policySegment`: Exposes CRUD operations for the **PolicySegment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PolicySegments
    * const policySegments = await prisma.policySegment.findMany()
    * ```
    */
  get policySegment(): Prisma.PolicySegmentDelegate<ExtArgs>;

  /**
   * `prisma.vcStatus`: Exposes CRUD operations for the **VcStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VcStatuses
    * const vcStatuses = await prisma.vcStatus.findMany()
    * ```
    */
  get vcStatus(): Prisma.VcStatusDelegate<ExtArgs>;

  /**
   * `prisma.suggestion`: Exposes CRUD operations for the **Suggestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suggestions
    * const suggestions = await prisma.suggestion.findMany()
    * ```
    */
  get suggestion(): Prisma.SuggestionDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tenant: 'Tenant',
    User: 'User',
    Project: 'Project',
    Framework: 'Framework',
    Control: 'Control',
    ControlEvaluation: 'ControlEvaluation',
    EvaluationRun: 'EvaluationRun',
    Fact: 'Fact',
    PolicySegment: 'PolicySegment',
    VcStatus: 'VcStatus',
    Suggestion: 'Suggestion',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "tenant" | "user" | "project" | "framework" | "control" | "controlEvaluation" | "evaluationRun" | "fact" | "policySegment" | "vcStatus" | "suggestion" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Framework: {
        payload: Prisma.$FrameworkPayload<ExtArgs>
        fields: Prisma.FrameworkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FrameworkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FrameworkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>
          }
          findFirst: {
            args: Prisma.FrameworkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FrameworkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>
          }
          findMany: {
            args: Prisma.FrameworkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>[]
          }
          create: {
            args: Prisma.FrameworkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>
          }
          createMany: {
            args: Prisma.FrameworkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FrameworkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>[]
          }
          delete: {
            args: Prisma.FrameworkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>
          }
          update: {
            args: Prisma.FrameworkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>
          }
          deleteMany: {
            args: Prisma.FrameworkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FrameworkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FrameworkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrameworkPayload>
          }
          aggregate: {
            args: Prisma.FrameworkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFramework>
          }
          groupBy: {
            args: Prisma.FrameworkGroupByArgs<ExtArgs>
            result: $Utils.Optional<FrameworkGroupByOutputType>[]
          }
          count: {
            args: Prisma.FrameworkCountArgs<ExtArgs>
            result: $Utils.Optional<FrameworkCountAggregateOutputType> | number
          }
        }
      }
      Control: {
        payload: Prisma.$ControlPayload<ExtArgs>
        fields: Prisma.ControlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ControlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ControlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlPayload>
          }
          findFirst: {
            args: Prisma.ControlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ControlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlPayload>
          }
          findMany: {
            args: Prisma.ControlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlPayload>[]
          }
          create: {
            args: Prisma.ControlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlPayload>
          }
          createMany: {
            args: Prisma.ControlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ControlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlPayload>[]
          }
          delete: {
            args: Prisma.ControlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlPayload>
          }
          update: {
            args: Prisma.ControlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlPayload>
          }
          deleteMany: {
            args: Prisma.ControlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ControlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ControlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlPayload>
          }
          aggregate: {
            args: Prisma.ControlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateControl>
          }
          groupBy: {
            args: Prisma.ControlGroupByArgs<ExtArgs>
            result: $Utils.Optional<ControlGroupByOutputType>[]
          }
          count: {
            args: Prisma.ControlCountArgs<ExtArgs>
            result: $Utils.Optional<ControlCountAggregateOutputType> | number
          }
        }
      }
      ControlEvaluation: {
        payload: Prisma.$ControlEvaluationPayload<ExtArgs>
        fields: Prisma.ControlEvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ControlEvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlEvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ControlEvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlEvaluationPayload>
          }
          findFirst: {
            args: Prisma.ControlEvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlEvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ControlEvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlEvaluationPayload>
          }
          findMany: {
            args: Prisma.ControlEvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlEvaluationPayload>[]
          }
          create: {
            args: Prisma.ControlEvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlEvaluationPayload>
          }
          createMany: {
            args: Prisma.ControlEvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ControlEvaluationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlEvaluationPayload>[]
          }
          delete: {
            args: Prisma.ControlEvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlEvaluationPayload>
          }
          update: {
            args: Prisma.ControlEvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlEvaluationPayload>
          }
          deleteMany: {
            args: Prisma.ControlEvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ControlEvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ControlEvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlEvaluationPayload>
          }
          aggregate: {
            args: Prisma.ControlEvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateControlEvaluation>
          }
          groupBy: {
            args: Prisma.ControlEvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ControlEvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ControlEvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<ControlEvaluationCountAggregateOutputType> | number
          }
        }
      }
      EvaluationRun: {
        payload: Prisma.$EvaluationRunPayload<ExtArgs>
        fields: Prisma.EvaluationRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvaluationRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvaluationRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationRunPayload>
          }
          findFirst: {
            args: Prisma.EvaluationRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvaluationRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationRunPayload>
          }
          findMany: {
            args: Prisma.EvaluationRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationRunPayload>[]
          }
          create: {
            args: Prisma.EvaluationRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationRunPayload>
          }
          createMany: {
            args: Prisma.EvaluationRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvaluationRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationRunPayload>[]
          }
          delete: {
            args: Prisma.EvaluationRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationRunPayload>
          }
          update: {
            args: Prisma.EvaluationRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationRunPayload>
          }
          deleteMany: {
            args: Prisma.EvaluationRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvaluationRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EvaluationRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationRunPayload>
          }
          aggregate: {
            args: Prisma.EvaluationRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluationRun>
          }
          groupBy: {
            args: Prisma.EvaluationRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluationRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvaluationRunCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluationRunCountAggregateOutputType> | number
          }
        }
      }
      Fact: {
        payload: Prisma.$FactPayload<ExtArgs>
        fields: Prisma.FactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>
          }
          findFirst: {
            args: Prisma.FactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>
          }
          findMany: {
            args: Prisma.FactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>[]
          }
          create: {
            args: Prisma.FactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>
          }
          createMany: {
            args: Prisma.FactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>[]
          }
          delete: {
            args: Prisma.FactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>
          }
          update: {
            args: Prisma.FactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>
          }
          deleteMany: {
            args: Prisma.FactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactPayload>
          }
          aggregate: {
            args: Prisma.FactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFact>
          }
          groupBy: {
            args: Prisma.FactGroupByArgs<ExtArgs>
            result: $Utils.Optional<FactGroupByOutputType>[]
          }
          count: {
            args: Prisma.FactCountArgs<ExtArgs>
            result: $Utils.Optional<FactCountAggregateOutputType> | number
          }
        }
      }
      PolicySegment: {
        payload: Prisma.$PolicySegmentPayload<ExtArgs>
        fields: Prisma.PolicySegmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolicySegmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicySegmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolicySegmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicySegmentPayload>
          }
          findFirst: {
            args: Prisma.PolicySegmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicySegmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolicySegmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicySegmentPayload>
          }
          findMany: {
            args: Prisma.PolicySegmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicySegmentPayload>[]
          }
          create: {
            args: Prisma.PolicySegmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicySegmentPayload>
          }
          createMany: {
            args: Prisma.PolicySegmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolicySegmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicySegmentPayload>[]
          }
          delete: {
            args: Prisma.PolicySegmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicySegmentPayload>
          }
          update: {
            args: Prisma.PolicySegmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicySegmentPayload>
          }
          deleteMany: {
            args: Prisma.PolicySegmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolicySegmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PolicySegmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicySegmentPayload>
          }
          aggregate: {
            args: Prisma.PolicySegmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicySegment>
          }
          groupBy: {
            args: Prisma.PolicySegmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicySegmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolicySegmentCountArgs<ExtArgs>
            result: $Utils.Optional<PolicySegmentCountAggregateOutputType> | number
          }
        }
      }
      VcStatus: {
        payload: Prisma.$VcStatusPayload<ExtArgs>
        fields: Prisma.VcStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VcStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VcStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcStatusPayload>
          }
          findFirst: {
            args: Prisma.VcStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VcStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcStatusPayload>
          }
          findMany: {
            args: Prisma.VcStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcStatusPayload>[]
          }
          create: {
            args: Prisma.VcStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcStatusPayload>
          }
          createMany: {
            args: Prisma.VcStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VcStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcStatusPayload>[]
          }
          delete: {
            args: Prisma.VcStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcStatusPayload>
          }
          update: {
            args: Prisma.VcStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcStatusPayload>
          }
          deleteMany: {
            args: Prisma.VcStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VcStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VcStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VcStatusPayload>
          }
          aggregate: {
            args: Prisma.VcStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVcStatus>
          }
          groupBy: {
            args: Prisma.VcStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<VcStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.VcStatusCountArgs<ExtArgs>
            result: $Utils.Optional<VcStatusCountAggregateOutputType> | number
          }
        }
      }
      Suggestion: {
        payload: Prisma.$SuggestionPayload<ExtArgs>
        fields: Prisma.SuggestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuggestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuggestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          findFirst: {
            args: Prisma.SuggestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuggestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          findMany: {
            args: Prisma.SuggestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>[]
          }
          create: {
            args: Prisma.SuggestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          createMany: {
            args: Prisma.SuggestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuggestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>[]
          }
          delete: {
            args: Prisma.SuggestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          update: {
            args: Prisma.SuggestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          deleteMany: {
            args: Prisma.SuggestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuggestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SuggestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuggestionPayload>
          }
          aggregate: {
            args: Prisma.SuggestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuggestion>
          }
          groupBy: {
            args: Prisma.SuggestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuggestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuggestionCountArgs<ExtArgs>
            result: $Utils.Optional<SuggestionCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    projects: number
    users: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | TenantCountOutputTypeCountProjectsArgs
    users?: boolean | TenantCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    controls: number
    facts: number
    suggestions: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    controls?: boolean | ProjectCountOutputTypeCountControlsArgs
    facts?: boolean | ProjectCountOutputTypeCountFactsArgs
    suggestions?: boolean | ProjectCountOutputTypeCountSuggestionsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountControlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ControlWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountFactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionWhereInput
  }


  /**
   * Count Type FrameworkCountOutputType
   */

  export type FrameworkCountOutputType = {
    controls: number
  }

  export type FrameworkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    controls?: boolean | FrameworkCountOutputTypeCountControlsArgs
  }

  // Custom InputTypes
  /**
   * FrameworkCountOutputType without action
   */
  export type FrameworkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrameworkCountOutputType
     */
    select?: FrameworkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FrameworkCountOutputType without action
   */
  export type FrameworkCountOutputTypeCountControlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ControlWhereInput
  }


  /**
   * Count Type ControlCountOutputType
   */

  export type ControlCountOutputType = {
    childControls: number
    evaluations: number
    suggestions: number
  }

  export type ControlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childControls?: boolean | ControlCountOutputTypeCountChildControlsArgs
    evaluations?: boolean | ControlCountOutputTypeCountEvaluationsArgs
    suggestions?: boolean | ControlCountOutputTypeCountSuggestionsArgs
  }

  // Custom InputTypes
  /**
   * ControlCountOutputType without action
   */
  export type ControlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlCountOutputType
     */
    select?: ControlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ControlCountOutputType without action
   */
  export type ControlCountOutputTypeCountChildControlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ControlWhereInput
  }

  /**
   * ControlCountOutputType without action
   */
  export type ControlCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ControlEvaluationWhereInput
  }

  /**
   * ControlCountOutputType without action
   */
  export type ControlCountOutputTypeCountSuggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    tier: $Enums.TierType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    tier: $Enums.TierType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    tier: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    tier?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    tier?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    tier?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    slug: string
    tier: $Enums.TierType
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    tier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projects?: boolean | Tenant$projectsArgs<ExtArgs>
    users?: boolean | Tenant$usersArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    tier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    tier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Tenant$projectsArgs<ExtArgs>
    users?: boolean | Tenant$usersArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      tier: $Enums.TierType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Tenant$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends Tenant$usersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */ 
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly slug: FieldRef<"Tenant", 'String'>
    readonly tier: FieldRef<"Tenant", 'TierType'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant.projects
   */
  export type Tenant$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Tenant.users
   */
  export type Tenant$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    email: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    email: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    tenantId: number
    email: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    tenantId: string
    email: string
    name: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    tenantId?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      email: string
      name: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly tenantId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    slug: string | null
    environment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    slug: string | null
    environment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    slug: number
    environment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    slug?: true
    environment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    slug?: true
    environment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    slug?: true
    environment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    tenantId: string
    name: string
    slug: string
    environment: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    slug?: boolean
    environment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    controls?: boolean | Project$controlsArgs<ExtArgs>
    facts?: boolean | Project$factsArgs<ExtArgs>
    suggestions?: boolean | Project$suggestionsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    slug?: boolean
    environment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
    slug?: boolean
    environment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    controls?: boolean | Project$controlsArgs<ExtArgs>
    facts?: boolean | Project$factsArgs<ExtArgs>
    suggestions?: boolean | Project$suggestionsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      controls: Prisma.$ControlPayload<ExtArgs>[]
      facts: Prisma.$FactPayload<ExtArgs>[]
      suggestions: Prisma.$SuggestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      name: string
      slug: string
      environment: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    controls<T extends Project$controlsArgs<ExtArgs> = {}>(args?: Subset<T, Project$controlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControlPayload<ExtArgs>, T, "findMany"> | Null>
    facts<T extends Project$factsArgs<ExtArgs> = {}>(args?: Subset<T, Project$factsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "findMany"> | Null>
    suggestions<T extends Project$suggestionsArgs<ExtArgs> = {}>(args?: Subset<T, Project$suggestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly tenantId: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly slug: FieldRef<"Project", 'String'>
    readonly environment: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.controls
   */
  export type Project$controlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Control
     */
    select?: ControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlInclude<ExtArgs> | null
    where?: ControlWhereInput
    orderBy?: ControlOrderByWithRelationInput | ControlOrderByWithRelationInput[]
    cursor?: ControlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ControlScalarFieldEnum | ControlScalarFieldEnum[]
  }

  /**
   * Project.facts
   */
  export type Project$factsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    where?: FactWhereInput
    orderBy?: FactOrderByWithRelationInput | FactOrderByWithRelationInput[]
    cursor?: FactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FactScalarFieldEnum | FactScalarFieldEnum[]
  }

  /**
   * Project.suggestions
   */
  export type Project$suggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    where?: SuggestionWhereInput
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    cursor?: SuggestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Framework
   */

  export type AggregateFramework = {
    _count: FrameworkCountAggregateOutputType | null
    _min: FrameworkMinAggregateOutputType | null
    _max: FrameworkMaxAggregateOutputType | null
  }

  export type FrameworkMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    catalogUrl: string | null
    version: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FrameworkMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    catalogUrl: string | null
    version: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FrameworkCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    catalogUrl: number
    version: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FrameworkMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    catalogUrl?: true
    version?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FrameworkMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    catalogUrl?: true
    version?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FrameworkCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    catalogUrl?: true
    version?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FrameworkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Framework to aggregate.
     */
    where?: FrameworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frameworks to fetch.
     */
    orderBy?: FrameworkOrderByWithRelationInput | FrameworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FrameworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frameworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frameworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Frameworks
    **/
    _count?: true | FrameworkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FrameworkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FrameworkMaxAggregateInputType
  }

  export type GetFrameworkAggregateType<T extends FrameworkAggregateArgs> = {
        [P in keyof T & keyof AggregateFramework]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFramework[P]>
      : GetScalarType<T[P], AggregateFramework[P]>
  }




  export type FrameworkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrameworkWhereInput
    orderBy?: FrameworkOrderByWithAggregationInput | FrameworkOrderByWithAggregationInput[]
    by: FrameworkScalarFieldEnum[] | FrameworkScalarFieldEnum
    having?: FrameworkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FrameworkCountAggregateInputType | true
    _min?: FrameworkMinAggregateInputType
    _max?: FrameworkMaxAggregateInputType
  }

  export type FrameworkGroupByOutputType = {
    id: string
    name: string
    slug: string
    catalogUrl: string | null
    version: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: FrameworkCountAggregateOutputType | null
    _min: FrameworkMinAggregateOutputType | null
    _max: FrameworkMaxAggregateOutputType | null
  }

  type GetFrameworkGroupByPayload<T extends FrameworkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FrameworkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FrameworkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FrameworkGroupByOutputType[P]>
            : GetScalarType<T[P], FrameworkGroupByOutputType[P]>
        }
      >
    >


  export type FrameworkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    catalogUrl?: boolean
    version?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    controls?: boolean | Framework$controlsArgs<ExtArgs>
    _count?: boolean | FrameworkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["framework"]>

  export type FrameworkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    catalogUrl?: boolean
    version?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["framework"]>

  export type FrameworkSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    catalogUrl?: boolean
    version?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FrameworkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    controls?: boolean | Framework$controlsArgs<ExtArgs>
    _count?: boolean | FrameworkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FrameworkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FrameworkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Framework"
    objects: {
      controls: Prisma.$ControlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      catalogUrl: string | null
      version: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["framework"]>
    composites: {}
  }

  type FrameworkGetPayload<S extends boolean | null | undefined | FrameworkDefaultArgs> = $Result.GetResult<Prisma.$FrameworkPayload, S>

  type FrameworkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FrameworkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FrameworkCountAggregateInputType | true
    }

  export interface FrameworkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Framework'], meta: { name: 'Framework' } }
    /**
     * Find zero or one Framework that matches the filter.
     * @param {FrameworkFindUniqueArgs} args - Arguments to find a Framework
     * @example
     * // Get one Framework
     * const framework = await prisma.framework.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FrameworkFindUniqueArgs>(args: SelectSubset<T, FrameworkFindUniqueArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Framework that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FrameworkFindUniqueOrThrowArgs} args - Arguments to find a Framework
     * @example
     * // Get one Framework
     * const framework = await prisma.framework.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FrameworkFindUniqueOrThrowArgs>(args: SelectSubset<T, FrameworkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Framework that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameworkFindFirstArgs} args - Arguments to find a Framework
     * @example
     * // Get one Framework
     * const framework = await prisma.framework.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FrameworkFindFirstArgs>(args?: SelectSubset<T, FrameworkFindFirstArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Framework that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameworkFindFirstOrThrowArgs} args - Arguments to find a Framework
     * @example
     * // Get one Framework
     * const framework = await prisma.framework.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FrameworkFindFirstOrThrowArgs>(args?: SelectSubset<T, FrameworkFindFirstOrThrowArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Frameworks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameworkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Frameworks
     * const frameworks = await prisma.framework.findMany()
     * 
     * // Get first 10 Frameworks
     * const frameworks = await prisma.framework.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const frameworkWithIdOnly = await prisma.framework.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FrameworkFindManyArgs>(args?: SelectSubset<T, FrameworkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Framework.
     * @param {FrameworkCreateArgs} args - Arguments to create a Framework.
     * @example
     * // Create one Framework
     * const Framework = await prisma.framework.create({
     *   data: {
     *     // ... data to create a Framework
     *   }
     * })
     * 
     */
    create<T extends FrameworkCreateArgs>(args: SelectSubset<T, FrameworkCreateArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Frameworks.
     * @param {FrameworkCreateManyArgs} args - Arguments to create many Frameworks.
     * @example
     * // Create many Frameworks
     * const framework = await prisma.framework.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FrameworkCreateManyArgs>(args?: SelectSubset<T, FrameworkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Frameworks and returns the data saved in the database.
     * @param {FrameworkCreateManyAndReturnArgs} args - Arguments to create many Frameworks.
     * @example
     * // Create many Frameworks
     * const framework = await prisma.framework.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Frameworks and only return the `id`
     * const frameworkWithIdOnly = await prisma.framework.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FrameworkCreateManyAndReturnArgs>(args?: SelectSubset<T, FrameworkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Framework.
     * @param {FrameworkDeleteArgs} args - Arguments to delete one Framework.
     * @example
     * // Delete one Framework
     * const Framework = await prisma.framework.delete({
     *   where: {
     *     // ... filter to delete one Framework
     *   }
     * })
     * 
     */
    delete<T extends FrameworkDeleteArgs>(args: SelectSubset<T, FrameworkDeleteArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Framework.
     * @param {FrameworkUpdateArgs} args - Arguments to update one Framework.
     * @example
     * // Update one Framework
     * const framework = await prisma.framework.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FrameworkUpdateArgs>(args: SelectSubset<T, FrameworkUpdateArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Frameworks.
     * @param {FrameworkDeleteManyArgs} args - Arguments to filter Frameworks to delete.
     * @example
     * // Delete a few Frameworks
     * const { count } = await prisma.framework.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FrameworkDeleteManyArgs>(args?: SelectSubset<T, FrameworkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Frameworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameworkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Frameworks
     * const framework = await prisma.framework.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FrameworkUpdateManyArgs>(args: SelectSubset<T, FrameworkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Framework.
     * @param {FrameworkUpsertArgs} args - Arguments to update or create a Framework.
     * @example
     * // Update or create a Framework
     * const framework = await prisma.framework.upsert({
     *   create: {
     *     // ... data to create a Framework
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Framework we want to update
     *   }
     * })
     */
    upsert<T extends FrameworkUpsertArgs>(args: SelectSubset<T, FrameworkUpsertArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Frameworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameworkCountArgs} args - Arguments to filter Frameworks to count.
     * @example
     * // Count the number of Frameworks
     * const count = await prisma.framework.count({
     *   where: {
     *     // ... the filter for the Frameworks we want to count
     *   }
     * })
    **/
    count<T extends FrameworkCountArgs>(
      args?: Subset<T, FrameworkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FrameworkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Framework.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameworkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FrameworkAggregateArgs>(args: Subset<T, FrameworkAggregateArgs>): Prisma.PrismaPromise<GetFrameworkAggregateType<T>>

    /**
     * Group by Framework.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrameworkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FrameworkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FrameworkGroupByArgs['orderBy'] }
        : { orderBy?: FrameworkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FrameworkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFrameworkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Framework model
   */
  readonly fields: FrameworkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Framework.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FrameworkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    controls<T extends Framework$controlsArgs<ExtArgs> = {}>(args?: Subset<T, Framework$controlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControlPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Framework model
   */ 
  interface FrameworkFieldRefs {
    readonly id: FieldRef<"Framework", 'String'>
    readonly name: FieldRef<"Framework", 'String'>
    readonly slug: FieldRef<"Framework", 'String'>
    readonly catalogUrl: FieldRef<"Framework", 'String'>
    readonly version: FieldRef<"Framework", 'String'>
    readonly isActive: FieldRef<"Framework", 'Boolean'>
    readonly createdAt: FieldRef<"Framework", 'DateTime'>
    readonly updatedAt: FieldRef<"Framework", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Framework findUnique
   */
  export type FrameworkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * Filter, which Framework to fetch.
     */
    where: FrameworkWhereUniqueInput
  }

  /**
   * Framework findUniqueOrThrow
   */
  export type FrameworkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * Filter, which Framework to fetch.
     */
    where: FrameworkWhereUniqueInput
  }

  /**
   * Framework findFirst
   */
  export type FrameworkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * Filter, which Framework to fetch.
     */
    where?: FrameworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frameworks to fetch.
     */
    orderBy?: FrameworkOrderByWithRelationInput | FrameworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Frameworks.
     */
    cursor?: FrameworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frameworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frameworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frameworks.
     */
    distinct?: FrameworkScalarFieldEnum | FrameworkScalarFieldEnum[]
  }

  /**
   * Framework findFirstOrThrow
   */
  export type FrameworkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * Filter, which Framework to fetch.
     */
    where?: FrameworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frameworks to fetch.
     */
    orderBy?: FrameworkOrderByWithRelationInput | FrameworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Frameworks.
     */
    cursor?: FrameworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frameworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frameworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frameworks.
     */
    distinct?: FrameworkScalarFieldEnum | FrameworkScalarFieldEnum[]
  }

  /**
   * Framework findMany
   */
  export type FrameworkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * Filter, which Frameworks to fetch.
     */
    where?: FrameworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frameworks to fetch.
     */
    orderBy?: FrameworkOrderByWithRelationInput | FrameworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Frameworks.
     */
    cursor?: FrameworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frameworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frameworks.
     */
    skip?: number
    distinct?: FrameworkScalarFieldEnum | FrameworkScalarFieldEnum[]
  }

  /**
   * Framework create
   */
  export type FrameworkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * The data needed to create a Framework.
     */
    data: XOR<FrameworkCreateInput, FrameworkUncheckedCreateInput>
  }

  /**
   * Framework createMany
   */
  export type FrameworkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Frameworks.
     */
    data: FrameworkCreateManyInput | FrameworkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Framework createManyAndReturn
   */
  export type FrameworkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Frameworks.
     */
    data: FrameworkCreateManyInput | FrameworkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Framework update
   */
  export type FrameworkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * The data needed to update a Framework.
     */
    data: XOR<FrameworkUpdateInput, FrameworkUncheckedUpdateInput>
    /**
     * Choose, which Framework to update.
     */
    where: FrameworkWhereUniqueInput
  }

  /**
   * Framework updateMany
   */
  export type FrameworkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Frameworks.
     */
    data: XOR<FrameworkUpdateManyMutationInput, FrameworkUncheckedUpdateManyInput>
    /**
     * Filter which Frameworks to update
     */
    where?: FrameworkWhereInput
  }

  /**
   * Framework upsert
   */
  export type FrameworkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * The filter to search for the Framework to update in case it exists.
     */
    where: FrameworkWhereUniqueInput
    /**
     * In case the Framework found by the `where` argument doesn't exist, create a new Framework with this data.
     */
    create: XOR<FrameworkCreateInput, FrameworkUncheckedCreateInput>
    /**
     * In case the Framework was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FrameworkUpdateInput, FrameworkUncheckedUpdateInput>
  }

  /**
   * Framework delete
   */
  export type FrameworkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
    /**
     * Filter which Framework to delete.
     */
    where: FrameworkWhereUniqueInput
  }

  /**
   * Framework deleteMany
   */
  export type FrameworkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Frameworks to delete
     */
    where?: FrameworkWhereInput
  }

  /**
   * Framework.controls
   */
  export type Framework$controlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Control
     */
    select?: ControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlInclude<ExtArgs> | null
    where?: ControlWhereInput
    orderBy?: ControlOrderByWithRelationInput | ControlOrderByWithRelationInput[]
    cursor?: ControlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ControlScalarFieldEnum | ControlScalarFieldEnum[]
  }

  /**
   * Framework without action
   */
  export type FrameworkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Framework
     */
    select?: FrameworkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrameworkInclude<ExtArgs> | null
  }


  /**
   * Model Control
   */

  export type AggregateControl = {
    _count: ControlCountAggregateOutputType | null
    _min: ControlMinAggregateOutputType | null
    _max: ControlMaxAggregateOutputType | null
  }

  export type ControlMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    frameworkId: string | null
    controlId: string | null
    title: string | null
    description: string | null
    criticality: $Enums.Criticality | null
    parentControlId: string | null
    currentStatus: $Enums.ControlStatus | null
    lastEvaluatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ControlMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    frameworkId: string | null
    controlId: string | null
    title: string | null
    description: string | null
    criticality: $Enums.Criticality | null
    parentControlId: string | null
    currentStatus: $Enums.ControlStatus | null
    lastEvaluatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ControlCountAggregateOutputType = {
    id: number
    projectId: number
    frameworkId: number
    controlId: number
    title: number
    description: number
    parameters: number
    criticality: number
    parentControlId: number
    currentStatus: number
    lastEvaluatedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ControlMinAggregateInputType = {
    id?: true
    projectId?: true
    frameworkId?: true
    controlId?: true
    title?: true
    description?: true
    criticality?: true
    parentControlId?: true
    currentStatus?: true
    lastEvaluatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ControlMaxAggregateInputType = {
    id?: true
    projectId?: true
    frameworkId?: true
    controlId?: true
    title?: true
    description?: true
    criticality?: true
    parentControlId?: true
    currentStatus?: true
    lastEvaluatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ControlCountAggregateInputType = {
    id?: true
    projectId?: true
    frameworkId?: true
    controlId?: true
    title?: true
    description?: true
    parameters?: true
    criticality?: true
    parentControlId?: true
    currentStatus?: true
    lastEvaluatedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ControlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Control to aggregate.
     */
    where?: ControlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controls to fetch.
     */
    orderBy?: ControlOrderByWithRelationInput | ControlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ControlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Controls
    **/
    _count?: true | ControlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ControlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ControlMaxAggregateInputType
  }

  export type GetControlAggregateType<T extends ControlAggregateArgs> = {
        [P in keyof T & keyof AggregateControl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateControl[P]>
      : GetScalarType<T[P], AggregateControl[P]>
  }




  export type ControlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ControlWhereInput
    orderBy?: ControlOrderByWithAggregationInput | ControlOrderByWithAggregationInput[]
    by: ControlScalarFieldEnum[] | ControlScalarFieldEnum
    having?: ControlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ControlCountAggregateInputType | true
    _min?: ControlMinAggregateInputType
    _max?: ControlMaxAggregateInputType
  }

  export type ControlGroupByOutputType = {
    id: string
    projectId: string
    frameworkId: string
    controlId: string
    title: string
    description: string
    parameters: JsonValue
    criticality: $Enums.Criticality
    parentControlId: string | null
    currentStatus: $Enums.ControlStatus
    lastEvaluatedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ControlCountAggregateOutputType | null
    _min: ControlMinAggregateOutputType | null
    _max: ControlMaxAggregateOutputType | null
  }

  type GetControlGroupByPayload<T extends ControlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ControlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ControlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ControlGroupByOutputType[P]>
            : GetScalarType<T[P], ControlGroupByOutputType[P]>
        }
      >
    >


  export type ControlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    frameworkId?: boolean
    controlId?: boolean
    title?: boolean
    description?: boolean
    parameters?: boolean
    criticality?: boolean
    parentControlId?: boolean
    currentStatus?: boolean
    lastEvaluatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    framework?: boolean | FrameworkDefaultArgs<ExtArgs>
    parentControl?: boolean | Control$parentControlArgs<ExtArgs>
    childControls?: boolean | Control$childControlsArgs<ExtArgs>
    evaluations?: boolean | Control$evaluationsArgs<ExtArgs>
    suggestions?: boolean | Control$suggestionsArgs<ExtArgs>
    _count?: boolean | ControlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["control"]>

  export type ControlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    frameworkId?: boolean
    controlId?: boolean
    title?: boolean
    description?: boolean
    parameters?: boolean
    criticality?: boolean
    parentControlId?: boolean
    currentStatus?: boolean
    lastEvaluatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    framework?: boolean | FrameworkDefaultArgs<ExtArgs>
    parentControl?: boolean | Control$parentControlArgs<ExtArgs>
  }, ExtArgs["result"]["control"]>

  export type ControlSelectScalar = {
    id?: boolean
    projectId?: boolean
    frameworkId?: boolean
    controlId?: boolean
    title?: boolean
    description?: boolean
    parameters?: boolean
    criticality?: boolean
    parentControlId?: boolean
    currentStatus?: boolean
    lastEvaluatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ControlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    framework?: boolean | FrameworkDefaultArgs<ExtArgs>
    parentControl?: boolean | Control$parentControlArgs<ExtArgs>
    childControls?: boolean | Control$childControlsArgs<ExtArgs>
    evaluations?: boolean | Control$evaluationsArgs<ExtArgs>
    suggestions?: boolean | Control$suggestionsArgs<ExtArgs>
    _count?: boolean | ControlCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ControlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    framework?: boolean | FrameworkDefaultArgs<ExtArgs>
    parentControl?: boolean | Control$parentControlArgs<ExtArgs>
  }

  export type $ControlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Control"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      framework: Prisma.$FrameworkPayload<ExtArgs>
      parentControl: Prisma.$ControlPayload<ExtArgs> | null
      childControls: Prisma.$ControlPayload<ExtArgs>[]
      evaluations: Prisma.$ControlEvaluationPayload<ExtArgs>[]
      suggestions: Prisma.$SuggestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      frameworkId: string
      controlId: string
      title: string
      description: string
      parameters: Prisma.JsonValue
      criticality: $Enums.Criticality
      parentControlId: string | null
      currentStatus: $Enums.ControlStatus
      lastEvaluatedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["control"]>
    composites: {}
  }

  type ControlGetPayload<S extends boolean | null | undefined | ControlDefaultArgs> = $Result.GetResult<Prisma.$ControlPayload, S>

  type ControlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ControlFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ControlCountAggregateInputType | true
    }

  export interface ControlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Control'], meta: { name: 'Control' } }
    /**
     * Find zero or one Control that matches the filter.
     * @param {ControlFindUniqueArgs} args - Arguments to find a Control
     * @example
     * // Get one Control
     * const control = await prisma.control.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ControlFindUniqueArgs>(args: SelectSubset<T, ControlFindUniqueArgs<ExtArgs>>): Prisma__ControlClient<$Result.GetResult<Prisma.$ControlPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Control that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ControlFindUniqueOrThrowArgs} args - Arguments to find a Control
     * @example
     * // Get one Control
     * const control = await prisma.control.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ControlFindUniqueOrThrowArgs>(args: SelectSubset<T, ControlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ControlClient<$Result.GetResult<Prisma.$ControlPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Control that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlFindFirstArgs} args - Arguments to find a Control
     * @example
     * // Get one Control
     * const control = await prisma.control.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ControlFindFirstArgs>(args?: SelectSubset<T, ControlFindFirstArgs<ExtArgs>>): Prisma__ControlClient<$Result.GetResult<Prisma.$ControlPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Control that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlFindFirstOrThrowArgs} args - Arguments to find a Control
     * @example
     * // Get one Control
     * const control = await prisma.control.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ControlFindFirstOrThrowArgs>(args?: SelectSubset<T, ControlFindFirstOrThrowArgs<ExtArgs>>): Prisma__ControlClient<$Result.GetResult<Prisma.$ControlPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Controls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Controls
     * const controls = await prisma.control.findMany()
     * 
     * // Get first 10 Controls
     * const controls = await prisma.control.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const controlWithIdOnly = await prisma.control.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ControlFindManyArgs>(args?: SelectSubset<T, ControlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControlPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Control.
     * @param {ControlCreateArgs} args - Arguments to create a Control.
     * @example
     * // Create one Control
     * const Control = await prisma.control.create({
     *   data: {
     *     // ... data to create a Control
     *   }
     * })
     * 
     */
    create<T extends ControlCreateArgs>(args: SelectSubset<T, ControlCreateArgs<ExtArgs>>): Prisma__ControlClient<$Result.GetResult<Prisma.$ControlPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Controls.
     * @param {ControlCreateManyArgs} args - Arguments to create many Controls.
     * @example
     * // Create many Controls
     * const control = await prisma.control.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ControlCreateManyArgs>(args?: SelectSubset<T, ControlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Controls and returns the data saved in the database.
     * @param {ControlCreateManyAndReturnArgs} args - Arguments to create many Controls.
     * @example
     * // Create many Controls
     * const control = await prisma.control.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Controls and only return the `id`
     * const controlWithIdOnly = await prisma.control.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ControlCreateManyAndReturnArgs>(args?: SelectSubset<T, ControlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControlPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Control.
     * @param {ControlDeleteArgs} args - Arguments to delete one Control.
     * @example
     * // Delete one Control
     * const Control = await prisma.control.delete({
     *   where: {
     *     // ... filter to delete one Control
     *   }
     * })
     * 
     */
    delete<T extends ControlDeleteArgs>(args: SelectSubset<T, ControlDeleteArgs<ExtArgs>>): Prisma__ControlClient<$Result.GetResult<Prisma.$ControlPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Control.
     * @param {ControlUpdateArgs} args - Arguments to update one Control.
     * @example
     * // Update one Control
     * const control = await prisma.control.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ControlUpdateArgs>(args: SelectSubset<T, ControlUpdateArgs<ExtArgs>>): Prisma__ControlClient<$Result.GetResult<Prisma.$ControlPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Controls.
     * @param {ControlDeleteManyArgs} args - Arguments to filter Controls to delete.
     * @example
     * // Delete a few Controls
     * const { count } = await prisma.control.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ControlDeleteManyArgs>(args?: SelectSubset<T, ControlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Controls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Controls
     * const control = await prisma.control.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ControlUpdateManyArgs>(args: SelectSubset<T, ControlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Control.
     * @param {ControlUpsertArgs} args - Arguments to update or create a Control.
     * @example
     * // Update or create a Control
     * const control = await prisma.control.upsert({
     *   create: {
     *     // ... data to create a Control
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Control we want to update
     *   }
     * })
     */
    upsert<T extends ControlUpsertArgs>(args: SelectSubset<T, ControlUpsertArgs<ExtArgs>>): Prisma__ControlClient<$Result.GetResult<Prisma.$ControlPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Controls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlCountArgs} args - Arguments to filter Controls to count.
     * @example
     * // Count the number of Controls
     * const count = await prisma.control.count({
     *   where: {
     *     // ... the filter for the Controls we want to count
     *   }
     * })
    **/
    count<T extends ControlCountArgs>(
      args?: Subset<T, ControlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ControlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Control.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ControlAggregateArgs>(args: Subset<T, ControlAggregateArgs>): Prisma.PrismaPromise<GetControlAggregateType<T>>

    /**
     * Group by Control.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ControlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ControlGroupByArgs['orderBy'] }
        : { orderBy?: ControlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ControlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetControlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Control model
   */
  readonly fields: ControlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Control.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ControlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    framework<T extends FrameworkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FrameworkDefaultArgs<ExtArgs>>): Prisma__FrameworkClient<$Result.GetResult<Prisma.$FrameworkPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    parentControl<T extends Control$parentControlArgs<ExtArgs> = {}>(args?: Subset<T, Control$parentControlArgs<ExtArgs>>): Prisma__ControlClient<$Result.GetResult<Prisma.$ControlPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    childControls<T extends Control$childControlsArgs<ExtArgs> = {}>(args?: Subset<T, Control$childControlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControlPayload<ExtArgs>, T, "findMany"> | Null>
    evaluations<T extends Control$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, Control$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControlEvaluationPayload<ExtArgs>, T, "findMany"> | Null>
    suggestions<T extends Control$suggestionsArgs<ExtArgs> = {}>(args?: Subset<T, Control$suggestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Control model
   */ 
  interface ControlFieldRefs {
    readonly id: FieldRef<"Control", 'String'>
    readonly projectId: FieldRef<"Control", 'String'>
    readonly frameworkId: FieldRef<"Control", 'String'>
    readonly controlId: FieldRef<"Control", 'String'>
    readonly title: FieldRef<"Control", 'String'>
    readonly description: FieldRef<"Control", 'String'>
    readonly parameters: FieldRef<"Control", 'Json'>
    readonly criticality: FieldRef<"Control", 'Criticality'>
    readonly parentControlId: FieldRef<"Control", 'String'>
    readonly currentStatus: FieldRef<"Control", 'ControlStatus'>
    readonly lastEvaluatedAt: FieldRef<"Control", 'DateTime'>
    readonly createdAt: FieldRef<"Control", 'DateTime'>
    readonly updatedAt: FieldRef<"Control", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Control findUnique
   */
  export type ControlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Control
     */
    select?: ControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlInclude<ExtArgs> | null
    /**
     * Filter, which Control to fetch.
     */
    where: ControlWhereUniqueInput
  }

  /**
   * Control findUniqueOrThrow
   */
  export type ControlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Control
     */
    select?: ControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlInclude<ExtArgs> | null
    /**
     * Filter, which Control to fetch.
     */
    where: ControlWhereUniqueInput
  }

  /**
   * Control findFirst
   */
  export type ControlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Control
     */
    select?: ControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlInclude<ExtArgs> | null
    /**
     * Filter, which Control to fetch.
     */
    where?: ControlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controls to fetch.
     */
    orderBy?: ControlOrderByWithRelationInput | ControlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Controls.
     */
    cursor?: ControlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Controls.
     */
    distinct?: ControlScalarFieldEnum | ControlScalarFieldEnum[]
  }

  /**
   * Control findFirstOrThrow
   */
  export type ControlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Control
     */
    select?: ControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlInclude<ExtArgs> | null
    /**
     * Filter, which Control to fetch.
     */
    where?: ControlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controls to fetch.
     */
    orderBy?: ControlOrderByWithRelationInput | ControlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Controls.
     */
    cursor?: ControlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Controls.
     */
    distinct?: ControlScalarFieldEnum | ControlScalarFieldEnum[]
  }

  /**
   * Control findMany
   */
  export type ControlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Control
     */
    select?: ControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlInclude<ExtArgs> | null
    /**
     * Filter, which Controls to fetch.
     */
    where?: ControlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controls to fetch.
     */
    orderBy?: ControlOrderByWithRelationInput | ControlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Controls.
     */
    cursor?: ControlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controls.
     */
    skip?: number
    distinct?: ControlScalarFieldEnum | ControlScalarFieldEnum[]
  }

  /**
   * Control create
   */
  export type ControlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Control
     */
    select?: ControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlInclude<ExtArgs> | null
    /**
     * The data needed to create a Control.
     */
    data: XOR<ControlCreateInput, ControlUncheckedCreateInput>
  }

  /**
   * Control createMany
   */
  export type ControlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Controls.
     */
    data: ControlCreateManyInput | ControlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Control createManyAndReturn
   */
  export type ControlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Control
     */
    select?: ControlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Controls.
     */
    data: ControlCreateManyInput | ControlCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Control update
   */
  export type ControlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Control
     */
    select?: ControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlInclude<ExtArgs> | null
    /**
     * The data needed to update a Control.
     */
    data: XOR<ControlUpdateInput, ControlUncheckedUpdateInput>
    /**
     * Choose, which Control to update.
     */
    where: ControlWhereUniqueInput
  }

  /**
   * Control updateMany
   */
  export type ControlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Controls.
     */
    data: XOR<ControlUpdateManyMutationInput, ControlUncheckedUpdateManyInput>
    /**
     * Filter which Controls to update
     */
    where?: ControlWhereInput
  }

  /**
   * Control upsert
   */
  export type ControlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Control
     */
    select?: ControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlInclude<ExtArgs> | null
    /**
     * The filter to search for the Control to update in case it exists.
     */
    where: ControlWhereUniqueInput
    /**
     * In case the Control found by the `where` argument doesn't exist, create a new Control with this data.
     */
    create: XOR<ControlCreateInput, ControlUncheckedCreateInput>
    /**
     * In case the Control was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ControlUpdateInput, ControlUncheckedUpdateInput>
  }

  /**
   * Control delete
   */
  export type ControlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Control
     */
    select?: ControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlInclude<ExtArgs> | null
    /**
     * Filter which Control to delete.
     */
    where: ControlWhereUniqueInput
  }

  /**
   * Control deleteMany
   */
  export type ControlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Controls to delete
     */
    where?: ControlWhereInput
  }

  /**
   * Control.parentControl
   */
  export type Control$parentControlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Control
     */
    select?: ControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlInclude<ExtArgs> | null
    where?: ControlWhereInput
  }

  /**
   * Control.childControls
   */
  export type Control$childControlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Control
     */
    select?: ControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlInclude<ExtArgs> | null
    where?: ControlWhereInput
    orderBy?: ControlOrderByWithRelationInput | ControlOrderByWithRelationInput[]
    cursor?: ControlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ControlScalarFieldEnum | ControlScalarFieldEnum[]
  }

  /**
   * Control.evaluations
   */
  export type Control$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlEvaluation
     */
    select?: ControlEvaluationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlEvaluationInclude<ExtArgs> | null
    where?: ControlEvaluationWhereInput
    orderBy?: ControlEvaluationOrderByWithRelationInput | ControlEvaluationOrderByWithRelationInput[]
    cursor?: ControlEvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ControlEvaluationScalarFieldEnum | ControlEvaluationScalarFieldEnum[]
  }

  /**
   * Control.suggestions
   */
  export type Control$suggestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    where?: SuggestionWhereInput
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    cursor?: SuggestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Control without action
   */
  export type ControlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Control
     */
    select?: ControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlInclude<ExtArgs> | null
  }


  /**
   * Model ControlEvaluation
   */

  export type AggregateControlEvaluation = {
    _count: ControlEvaluationCountAggregateOutputType | null
    _avg: ControlEvaluationAvgAggregateOutputType | null
    _sum: ControlEvaluationSumAggregateOutputType | null
    _min: ControlEvaluationMinAggregateOutputType | null
    _max: ControlEvaluationMaxAggregateOutputType | null
  }

  export type ControlEvaluationAvgAggregateOutputType = {
    nlpScore: number | null
    riskScore: number | null
  }

  export type ControlEvaluationSumAggregateOutputType = {
    nlpScore: number | null
    riskScore: number | null
  }

  export type ControlEvaluationMinAggregateOutputType = {
    id: string | null
    controlId: string | null
    projectId: string | null
    runId: string | null
    status: $Enums.ControlStatus | null
    rationale: string | null
    factsHash: string | null
    rulesetHash: string | null
    rulesetVersion: string | null
    nlpScore: number | null
    riskScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ControlEvaluationMaxAggregateOutputType = {
    id: string | null
    controlId: string | null
    projectId: string | null
    runId: string | null
    status: $Enums.ControlStatus | null
    rationale: string | null
    factsHash: string | null
    rulesetHash: string | null
    rulesetVersion: string | null
    nlpScore: number | null
    riskScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ControlEvaluationCountAggregateOutputType = {
    id: number
    controlId: number
    projectId: number
    runId: number
    status: number
    rationale: number
    evidenceRefs: number
    factsHash: number
    rulesetHash: number
    rulesetVersion: number
    nlpScore: number
    riskScore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ControlEvaluationAvgAggregateInputType = {
    nlpScore?: true
    riskScore?: true
  }

  export type ControlEvaluationSumAggregateInputType = {
    nlpScore?: true
    riskScore?: true
  }

  export type ControlEvaluationMinAggregateInputType = {
    id?: true
    controlId?: true
    projectId?: true
    runId?: true
    status?: true
    rationale?: true
    factsHash?: true
    rulesetHash?: true
    rulesetVersion?: true
    nlpScore?: true
    riskScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ControlEvaluationMaxAggregateInputType = {
    id?: true
    controlId?: true
    projectId?: true
    runId?: true
    status?: true
    rationale?: true
    factsHash?: true
    rulesetHash?: true
    rulesetVersion?: true
    nlpScore?: true
    riskScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ControlEvaluationCountAggregateInputType = {
    id?: true
    controlId?: true
    projectId?: true
    runId?: true
    status?: true
    rationale?: true
    evidenceRefs?: true
    factsHash?: true
    rulesetHash?: true
    rulesetVersion?: true
    nlpScore?: true
    riskScore?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ControlEvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ControlEvaluation to aggregate.
     */
    where?: ControlEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ControlEvaluations to fetch.
     */
    orderBy?: ControlEvaluationOrderByWithRelationInput | ControlEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ControlEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ControlEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ControlEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ControlEvaluations
    **/
    _count?: true | ControlEvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ControlEvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ControlEvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ControlEvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ControlEvaluationMaxAggregateInputType
  }

  export type GetControlEvaluationAggregateType<T extends ControlEvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateControlEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateControlEvaluation[P]>
      : GetScalarType<T[P], AggregateControlEvaluation[P]>
  }




  export type ControlEvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ControlEvaluationWhereInput
    orderBy?: ControlEvaluationOrderByWithAggregationInput | ControlEvaluationOrderByWithAggregationInput[]
    by: ControlEvaluationScalarFieldEnum[] | ControlEvaluationScalarFieldEnum
    having?: ControlEvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ControlEvaluationCountAggregateInputType | true
    _avg?: ControlEvaluationAvgAggregateInputType
    _sum?: ControlEvaluationSumAggregateInputType
    _min?: ControlEvaluationMinAggregateInputType
    _max?: ControlEvaluationMaxAggregateInputType
  }

  export type ControlEvaluationGroupByOutputType = {
    id: string
    controlId: string
    projectId: string
    runId: string
    status: $Enums.ControlStatus
    rationale: string
    evidenceRefs: JsonValue
    factsHash: string
    rulesetHash: string
    rulesetVersion: string
    nlpScore: number | null
    riskScore: number | null
    createdAt: Date
    updatedAt: Date
    _count: ControlEvaluationCountAggregateOutputType | null
    _avg: ControlEvaluationAvgAggregateOutputType | null
    _sum: ControlEvaluationSumAggregateOutputType | null
    _min: ControlEvaluationMinAggregateOutputType | null
    _max: ControlEvaluationMaxAggregateOutputType | null
  }

  type GetControlEvaluationGroupByPayload<T extends ControlEvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ControlEvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ControlEvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ControlEvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], ControlEvaluationGroupByOutputType[P]>
        }
      >
    >


  export type ControlEvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    controlId?: boolean
    projectId?: boolean
    runId?: boolean
    status?: boolean
    rationale?: boolean
    evidenceRefs?: boolean
    factsHash?: boolean
    rulesetHash?: boolean
    rulesetVersion?: boolean
    nlpScore?: boolean
    riskScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    control?: boolean | ControlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["controlEvaluation"]>

  export type ControlEvaluationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    controlId?: boolean
    projectId?: boolean
    runId?: boolean
    status?: boolean
    rationale?: boolean
    evidenceRefs?: boolean
    factsHash?: boolean
    rulesetHash?: boolean
    rulesetVersion?: boolean
    nlpScore?: boolean
    riskScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    control?: boolean | ControlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["controlEvaluation"]>

  export type ControlEvaluationSelectScalar = {
    id?: boolean
    controlId?: boolean
    projectId?: boolean
    runId?: boolean
    status?: boolean
    rationale?: boolean
    evidenceRefs?: boolean
    factsHash?: boolean
    rulesetHash?: boolean
    rulesetVersion?: boolean
    nlpScore?: boolean
    riskScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ControlEvaluationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    control?: boolean | ControlDefaultArgs<ExtArgs>
  }
  export type ControlEvaluationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    control?: boolean | ControlDefaultArgs<ExtArgs>
  }

  export type $ControlEvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ControlEvaluation"
    objects: {
      control: Prisma.$ControlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      controlId: string
      projectId: string
      runId: string
      status: $Enums.ControlStatus
      rationale: string
      evidenceRefs: Prisma.JsonValue
      factsHash: string
      rulesetHash: string
      rulesetVersion: string
      nlpScore: number | null
      riskScore: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["controlEvaluation"]>
    composites: {}
  }

  type ControlEvaluationGetPayload<S extends boolean | null | undefined | ControlEvaluationDefaultArgs> = $Result.GetResult<Prisma.$ControlEvaluationPayload, S>

  type ControlEvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ControlEvaluationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ControlEvaluationCountAggregateInputType | true
    }

  export interface ControlEvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ControlEvaluation'], meta: { name: 'ControlEvaluation' } }
    /**
     * Find zero or one ControlEvaluation that matches the filter.
     * @param {ControlEvaluationFindUniqueArgs} args - Arguments to find a ControlEvaluation
     * @example
     * // Get one ControlEvaluation
     * const controlEvaluation = await prisma.controlEvaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ControlEvaluationFindUniqueArgs>(args: SelectSubset<T, ControlEvaluationFindUniqueArgs<ExtArgs>>): Prisma__ControlEvaluationClient<$Result.GetResult<Prisma.$ControlEvaluationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ControlEvaluation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ControlEvaluationFindUniqueOrThrowArgs} args - Arguments to find a ControlEvaluation
     * @example
     * // Get one ControlEvaluation
     * const controlEvaluation = await prisma.controlEvaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ControlEvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, ControlEvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ControlEvaluationClient<$Result.GetResult<Prisma.$ControlEvaluationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ControlEvaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlEvaluationFindFirstArgs} args - Arguments to find a ControlEvaluation
     * @example
     * // Get one ControlEvaluation
     * const controlEvaluation = await prisma.controlEvaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ControlEvaluationFindFirstArgs>(args?: SelectSubset<T, ControlEvaluationFindFirstArgs<ExtArgs>>): Prisma__ControlEvaluationClient<$Result.GetResult<Prisma.$ControlEvaluationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ControlEvaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlEvaluationFindFirstOrThrowArgs} args - Arguments to find a ControlEvaluation
     * @example
     * // Get one ControlEvaluation
     * const controlEvaluation = await prisma.controlEvaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ControlEvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, ControlEvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ControlEvaluationClient<$Result.GetResult<Prisma.$ControlEvaluationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ControlEvaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlEvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ControlEvaluations
     * const controlEvaluations = await prisma.controlEvaluation.findMany()
     * 
     * // Get first 10 ControlEvaluations
     * const controlEvaluations = await prisma.controlEvaluation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const controlEvaluationWithIdOnly = await prisma.controlEvaluation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ControlEvaluationFindManyArgs>(args?: SelectSubset<T, ControlEvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControlEvaluationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ControlEvaluation.
     * @param {ControlEvaluationCreateArgs} args - Arguments to create a ControlEvaluation.
     * @example
     * // Create one ControlEvaluation
     * const ControlEvaluation = await prisma.controlEvaluation.create({
     *   data: {
     *     // ... data to create a ControlEvaluation
     *   }
     * })
     * 
     */
    create<T extends ControlEvaluationCreateArgs>(args: SelectSubset<T, ControlEvaluationCreateArgs<ExtArgs>>): Prisma__ControlEvaluationClient<$Result.GetResult<Prisma.$ControlEvaluationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ControlEvaluations.
     * @param {ControlEvaluationCreateManyArgs} args - Arguments to create many ControlEvaluations.
     * @example
     * // Create many ControlEvaluations
     * const controlEvaluation = await prisma.controlEvaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ControlEvaluationCreateManyArgs>(args?: SelectSubset<T, ControlEvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ControlEvaluations and returns the data saved in the database.
     * @param {ControlEvaluationCreateManyAndReturnArgs} args - Arguments to create many ControlEvaluations.
     * @example
     * // Create many ControlEvaluations
     * const controlEvaluation = await prisma.controlEvaluation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ControlEvaluations and only return the `id`
     * const controlEvaluationWithIdOnly = await prisma.controlEvaluation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ControlEvaluationCreateManyAndReturnArgs>(args?: SelectSubset<T, ControlEvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControlEvaluationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ControlEvaluation.
     * @param {ControlEvaluationDeleteArgs} args - Arguments to delete one ControlEvaluation.
     * @example
     * // Delete one ControlEvaluation
     * const ControlEvaluation = await prisma.controlEvaluation.delete({
     *   where: {
     *     // ... filter to delete one ControlEvaluation
     *   }
     * })
     * 
     */
    delete<T extends ControlEvaluationDeleteArgs>(args: SelectSubset<T, ControlEvaluationDeleteArgs<ExtArgs>>): Prisma__ControlEvaluationClient<$Result.GetResult<Prisma.$ControlEvaluationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ControlEvaluation.
     * @param {ControlEvaluationUpdateArgs} args - Arguments to update one ControlEvaluation.
     * @example
     * // Update one ControlEvaluation
     * const controlEvaluation = await prisma.controlEvaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ControlEvaluationUpdateArgs>(args: SelectSubset<T, ControlEvaluationUpdateArgs<ExtArgs>>): Prisma__ControlEvaluationClient<$Result.GetResult<Prisma.$ControlEvaluationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ControlEvaluations.
     * @param {ControlEvaluationDeleteManyArgs} args - Arguments to filter ControlEvaluations to delete.
     * @example
     * // Delete a few ControlEvaluations
     * const { count } = await prisma.controlEvaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ControlEvaluationDeleteManyArgs>(args?: SelectSubset<T, ControlEvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ControlEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlEvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ControlEvaluations
     * const controlEvaluation = await prisma.controlEvaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ControlEvaluationUpdateManyArgs>(args: SelectSubset<T, ControlEvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ControlEvaluation.
     * @param {ControlEvaluationUpsertArgs} args - Arguments to update or create a ControlEvaluation.
     * @example
     * // Update or create a ControlEvaluation
     * const controlEvaluation = await prisma.controlEvaluation.upsert({
     *   create: {
     *     // ... data to create a ControlEvaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ControlEvaluation we want to update
     *   }
     * })
     */
    upsert<T extends ControlEvaluationUpsertArgs>(args: SelectSubset<T, ControlEvaluationUpsertArgs<ExtArgs>>): Prisma__ControlEvaluationClient<$Result.GetResult<Prisma.$ControlEvaluationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ControlEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlEvaluationCountArgs} args - Arguments to filter ControlEvaluations to count.
     * @example
     * // Count the number of ControlEvaluations
     * const count = await prisma.controlEvaluation.count({
     *   where: {
     *     // ... the filter for the ControlEvaluations we want to count
     *   }
     * })
    **/
    count<T extends ControlEvaluationCountArgs>(
      args?: Subset<T, ControlEvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ControlEvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ControlEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlEvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ControlEvaluationAggregateArgs>(args: Subset<T, ControlEvaluationAggregateArgs>): Prisma.PrismaPromise<GetControlEvaluationAggregateType<T>>

    /**
     * Group by ControlEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlEvaluationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ControlEvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ControlEvaluationGroupByArgs['orderBy'] }
        : { orderBy?: ControlEvaluationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ControlEvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetControlEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ControlEvaluation model
   */
  readonly fields: ControlEvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ControlEvaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ControlEvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    control<T extends ControlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ControlDefaultArgs<ExtArgs>>): Prisma__ControlClient<$Result.GetResult<Prisma.$ControlPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ControlEvaluation model
   */ 
  interface ControlEvaluationFieldRefs {
    readonly id: FieldRef<"ControlEvaluation", 'String'>
    readonly controlId: FieldRef<"ControlEvaluation", 'String'>
    readonly projectId: FieldRef<"ControlEvaluation", 'String'>
    readonly runId: FieldRef<"ControlEvaluation", 'String'>
    readonly status: FieldRef<"ControlEvaluation", 'ControlStatus'>
    readonly rationale: FieldRef<"ControlEvaluation", 'String'>
    readonly evidenceRefs: FieldRef<"ControlEvaluation", 'Json'>
    readonly factsHash: FieldRef<"ControlEvaluation", 'String'>
    readonly rulesetHash: FieldRef<"ControlEvaluation", 'String'>
    readonly rulesetVersion: FieldRef<"ControlEvaluation", 'String'>
    readonly nlpScore: FieldRef<"ControlEvaluation", 'Float'>
    readonly riskScore: FieldRef<"ControlEvaluation", 'Float'>
    readonly createdAt: FieldRef<"ControlEvaluation", 'DateTime'>
    readonly updatedAt: FieldRef<"ControlEvaluation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ControlEvaluation findUnique
   */
  export type ControlEvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlEvaluation
     */
    select?: ControlEvaluationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which ControlEvaluation to fetch.
     */
    where: ControlEvaluationWhereUniqueInput
  }

  /**
   * ControlEvaluation findUniqueOrThrow
   */
  export type ControlEvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlEvaluation
     */
    select?: ControlEvaluationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which ControlEvaluation to fetch.
     */
    where: ControlEvaluationWhereUniqueInput
  }

  /**
   * ControlEvaluation findFirst
   */
  export type ControlEvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlEvaluation
     */
    select?: ControlEvaluationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which ControlEvaluation to fetch.
     */
    where?: ControlEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ControlEvaluations to fetch.
     */
    orderBy?: ControlEvaluationOrderByWithRelationInput | ControlEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ControlEvaluations.
     */
    cursor?: ControlEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ControlEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ControlEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ControlEvaluations.
     */
    distinct?: ControlEvaluationScalarFieldEnum | ControlEvaluationScalarFieldEnum[]
  }

  /**
   * ControlEvaluation findFirstOrThrow
   */
  export type ControlEvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlEvaluation
     */
    select?: ControlEvaluationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which ControlEvaluation to fetch.
     */
    where?: ControlEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ControlEvaluations to fetch.
     */
    orderBy?: ControlEvaluationOrderByWithRelationInput | ControlEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ControlEvaluations.
     */
    cursor?: ControlEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ControlEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ControlEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ControlEvaluations.
     */
    distinct?: ControlEvaluationScalarFieldEnum | ControlEvaluationScalarFieldEnum[]
  }

  /**
   * ControlEvaluation findMany
   */
  export type ControlEvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlEvaluation
     */
    select?: ControlEvaluationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which ControlEvaluations to fetch.
     */
    where?: ControlEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ControlEvaluations to fetch.
     */
    orderBy?: ControlEvaluationOrderByWithRelationInput | ControlEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ControlEvaluations.
     */
    cursor?: ControlEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ControlEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ControlEvaluations.
     */
    skip?: number
    distinct?: ControlEvaluationScalarFieldEnum | ControlEvaluationScalarFieldEnum[]
  }

  /**
   * ControlEvaluation create
   */
  export type ControlEvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlEvaluation
     */
    select?: ControlEvaluationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlEvaluationInclude<ExtArgs> | null
    /**
     * The data needed to create a ControlEvaluation.
     */
    data: XOR<ControlEvaluationCreateInput, ControlEvaluationUncheckedCreateInput>
  }

  /**
   * ControlEvaluation createMany
   */
  export type ControlEvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ControlEvaluations.
     */
    data: ControlEvaluationCreateManyInput | ControlEvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ControlEvaluation createManyAndReturn
   */
  export type ControlEvaluationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlEvaluation
     */
    select?: ControlEvaluationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ControlEvaluations.
     */
    data: ControlEvaluationCreateManyInput | ControlEvaluationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlEvaluationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ControlEvaluation update
   */
  export type ControlEvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlEvaluation
     */
    select?: ControlEvaluationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlEvaluationInclude<ExtArgs> | null
    /**
     * The data needed to update a ControlEvaluation.
     */
    data: XOR<ControlEvaluationUpdateInput, ControlEvaluationUncheckedUpdateInput>
    /**
     * Choose, which ControlEvaluation to update.
     */
    where: ControlEvaluationWhereUniqueInput
  }

  /**
   * ControlEvaluation updateMany
   */
  export type ControlEvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ControlEvaluations.
     */
    data: XOR<ControlEvaluationUpdateManyMutationInput, ControlEvaluationUncheckedUpdateManyInput>
    /**
     * Filter which ControlEvaluations to update
     */
    where?: ControlEvaluationWhereInput
  }

  /**
   * ControlEvaluation upsert
   */
  export type ControlEvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlEvaluation
     */
    select?: ControlEvaluationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlEvaluationInclude<ExtArgs> | null
    /**
     * The filter to search for the ControlEvaluation to update in case it exists.
     */
    where: ControlEvaluationWhereUniqueInput
    /**
     * In case the ControlEvaluation found by the `where` argument doesn't exist, create a new ControlEvaluation with this data.
     */
    create: XOR<ControlEvaluationCreateInput, ControlEvaluationUncheckedCreateInput>
    /**
     * In case the ControlEvaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ControlEvaluationUpdateInput, ControlEvaluationUncheckedUpdateInput>
  }

  /**
   * ControlEvaluation delete
   */
  export type ControlEvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlEvaluation
     */
    select?: ControlEvaluationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlEvaluationInclude<ExtArgs> | null
    /**
     * Filter which ControlEvaluation to delete.
     */
    where: ControlEvaluationWhereUniqueInput
  }

  /**
   * ControlEvaluation deleteMany
   */
  export type ControlEvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ControlEvaluations to delete
     */
    where?: ControlEvaluationWhereInput
  }

  /**
   * ControlEvaluation without action
   */
  export type ControlEvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlEvaluation
     */
    select?: ControlEvaluationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlEvaluationInclude<ExtArgs> | null
  }


  /**
   * Model EvaluationRun
   */

  export type AggregateEvaluationRun = {
    _count: EvaluationRunCountAggregateOutputType | null
    _avg: EvaluationRunAvgAggregateOutputType | null
    _sum: EvaluationRunSumAggregateOutputType | null
    _min: EvaluationRunMinAggregateOutputType | null
    _max: EvaluationRunMaxAggregateOutputType | null
  }

  export type EvaluationRunAvgAggregateOutputType = {
    totalControls: number | null
    passed: number | null
    failed: number | null
    manual: number | null
    notApplicable: number | null
  }

  export type EvaluationRunSumAggregateOutputType = {
    totalControls: number | null
    passed: number | null
    failed: number | null
    manual: number | null
    notApplicable: number | null
  }

  export type EvaluationRunMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    trigger: string | null
    triggeredBy: string | null
    totalControls: number | null
    passed: number | null
    failed: number | null
    manual: number | null
    notApplicable: number | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type EvaluationRunMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    trigger: string | null
    triggeredBy: string | null
    totalControls: number | null
    passed: number | null
    failed: number | null
    manual: number | null
    notApplicable: number | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type EvaluationRunCountAggregateOutputType = {
    id: number
    projectId: number
    trigger: number
    triggeredBy: number
    totalControls: number
    passed: number
    failed: number
    manual: number
    notApplicable: number
    startedAt: number
    completedAt: number
    _all: number
  }


  export type EvaluationRunAvgAggregateInputType = {
    totalControls?: true
    passed?: true
    failed?: true
    manual?: true
    notApplicable?: true
  }

  export type EvaluationRunSumAggregateInputType = {
    totalControls?: true
    passed?: true
    failed?: true
    manual?: true
    notApplicable?: true
  }

  export type EvaluationRunMinAggregateInputType = {
    id?: true
    projectId?: true
    trigger?: true
    triggeredBy?: true
    totalControls?: true
    passed?: true
    failed?: true
    manual?: true
    notApplicable?: true
    startedAt?: true
    completedAt?: true
  }

  export type EvaluationRunMaxAggregateInputType = {
    id?: true
    projectId?: true
    trigger?: true
    triggeredBy?: true
    totalControls?: true
    passed?: true
    failed?: true
    manual?: true
    notApplicable?: true
    startedAt?: true
    completedAt?: true
  }

  export type EvaluationRunCountAggregateInputType = {
    id?: true
    projectId?: true
    trigger?: true
    triggeredBy?: true
    totalControls?: true
    passed?: true
    failed?: true
    manual?: true
    notApplicable?: true
    startedAt?: true
    completedAt?: true
    _all?: true
  }

  export type EvaluationRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvaluationRun to aggregate.
     */
    where?: EvaluationRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationRuns to fetch.
     */
    orderBy?: EvaluationRunOrderByWithRelationInput | EvaluationRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvaluationRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EvaluationRuns
    **/
    _count?: true | EvaluationRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvaluationRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvaluationRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluationRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluationRunMaxAggregateInputType
  }

  export type GetEvaluationRunAggregateType<T extends EvaluationRunAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluationRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluationRun[P]>
      : GetScalarType<T[P], AggregateEvaluationRun[P]>
  }




  export type EvaluationRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationRunWhereInput
    orderBy?: EvaluationRunOrderByWithAggregationInput | EvaluationRunOrderByWithAggregationInput[]
    by: EvaluationRunScalarFieldEnum[] | EvaluationRunScalarFieldEnum
    having?: EvaluationRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluationRunCountAggregateInputType | true
    _avg?: EvaluationRunAvgAggregateInputType
    _sum?: EvaluationRunSumAggregateInputType
    _min?: EvaluationRunMinAggregateInputType
    _max?: EvaluationRunMaxAggregateInputType
  }

  export type EvaluationRunGroupByOutputType = {
    id: string
    projectId: string
    trigger: string
    triggeredBy: string | null
    totalControls: number
    passed: number
    failed: number
    manual: number
    notApplicable: number
    startedAt: Date
    completedAt: Date | null
    _count: EvaluationRunCountAggregateOutputType | null
    _avg: EvaluationRunAvgAggregateOutputType | null
    _sum: EvaluationRunSumAggregateOutputType | null
    _min: EvaluationRunMinAggregateOutputType | null
    _max: EvaluationRunMaxAggregateOutputType | null
  }

  type GetEvaluationRunGroupByPayload<T extends EvaluationRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluationRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluationRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluationRunGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluationRunGroupByOutputType[P]>
        }
      >
    >


  export type EvaluationRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    trigger?: boolean
    triggeredBy?: boolean
    totalControls?: boolean
    passed?: boolean
    failed?: boolean
    manual?: boolean
    notApplicable?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["evaluationRun"]>

  export type EvaluationRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    trigger?: boolean
    triggeredBy?: boolean
    totalControls?: boolean
    passed?: boolean
    failed?: boolean
    manual?: boolean
    notApplicable?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["evaluationRun"]>

  export type EvaluationRunSelectScalar = {
    id?: boolean
    projectId?: boolean
    trigger?: boolean
    triggeredBy?: boolean
    totalControls?: boolean
    passed?: boolean
    failed?: boolean
    manual?: boolean
    notApplicable?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }


  export type $EvaluationRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EvaluationRun"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      trigger: string
      triggeredBy: string | null
      totalControls: number
      passed: number
      failed: number
      manual: number
      notApplicable: number
      startedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["evaluationRun"]>
    composites: {}
  }

  type EvaluationRunGetPayload<S extends boolean | null | undefined | EvaluationRunDefaultArgs> = $Result.GetResult<Prisma.$EvaluationRunPayload, S>

  type EvaluationRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EvaluationRunFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EvaluationRunCountAggregateInputType | true
    }

  export interface EvaluationRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EvaluationRun'], meta: { name: 'EvaluationRun' } }
    /**
     * Find zero or one EvaluationRun that matches the filter.
     * @param {EvaluationRunFindUniqueArgs} args - Arguments to find a EvaluationRun
     * @example
     * // Get one EvaluationRun
     * const evaluationRun = await prisma.evaluationRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvaluationRunFindUniqueArgs>(args: SelectSubset<T, EvaluationRunFindUniqueArgs<ExtArgs>>): Prisma__EvaluationRunClient<$Result.GetResult<Prisma.$EvaluationRunPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EvaluationRun that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EvaluationRunFindUniqueOrThrowArgs} args - Arguments to find a EvaluationRun
     * @example
     * // Get one EvaluationRun
     * const evaluationRun = await prisma.evaluationRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvaluationRunFindUniqueOrThrowArgs>(args: SelectSubset<T, EvaluationRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvaluationRunClient<$Result.GetResult<Prisma.$EvaluationRunPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EvaluationRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationRunFindFirstArgs} args - Arguments to find a EvaluationRun
     * @example
     * // Get one EvaluationRun
     * const evaluationRun = await prisma.evaluationRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvaluationRunFindFirstArgs>(args?: SelectSubset<T, EvaluationRunFindFirstArgs<ExtArgs>>): Prisma__EvaluationRunClient<$Result.GetResult<Prisma.$EvaluationRunPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EvaluationRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationRunFindFirstOrThrowArgs} args - Arguments to find a EvaluationRun
     * @example
     * // Get one EvaluationRun
     * const evaluationRun = await prisma.evaluationRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvaluationRunFindFirstOrThrowArgs>(args?: SelectSubset<T, EvaluationRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvaluationRunClient<$Result.GetResult<Prisma.$EvaluationRunPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EvaluationRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EvaluationRuns
     * const evaluationRuns = await prisma.evaluationRun.findMany()
     * 
     * // Get first 10 EvaluationRuns
     * const evaluationRuns = await prisma.evaluationRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluationRunWithIdOnly = await prisma.evaluationRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvaluationRunFindManyArgs>(args?: SelectSubset<T, EvaluationRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationRunPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EvaluationRun.
     * @param {EvaluationRunCreateArgs} args - Arguments to create a EvaluationRun.
     * @example
     * // Create one EvaluationRun
     * const EvaluationRun = await prisma.evaluationRun.create({
     *   data: {
     *     // ... data to create a EvaluationRun
     *   }
     * })
     * 
     */
    create<T extends EvaluationRunCreateArgs>(args: SelectSubset<T, EvaluationRunCreateArgs<ExtArgs>>): Prisma__EvaluationRunClient<$Result.GetResult<Prisma.$EvaluationRunPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EvaluationRuns.
     * @param {EvaluationRunCreateManyArgs} args - Arguments to create many EvaluationRuns.
     * @example
     * // Create many EvaluationRuns
     * const evaluationRun = await prisma.evaluationRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvaluationRunCreateManyArgs>(args?: SelectSubset<T, EvaluationRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EvaluationRuns and returns the data saved in the database.
     * @param {EvaluationRunCreateManyAndReturnArgs} args - Arguments to create many EvaluationRuns.
     * @example
     * // Create many EvaluationRuns
     * const evaluationRun = await prisma.evaluationRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EvaluationRuns and only return the `id`
     * const evaluationRunWithIdOnly = await prisma.evaluationRun.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvaluationRunCreateManyAndReturnArgs>(args?: SelectSubset<T, EvaluationRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationRunPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EvaluationRun.
     * @param {EvaluationRunDeleteArgs} args - Arguments to delete one EvaluationRun.
     * @example
     * // Delete one EvaluationRun
     * const EvaluationRun = await prisma.evaluationRun.delete({
     *   where: {
     *     // ... filter to delete one EvaluationRun
     *   }
     * })
     * 
     */
    delete<T extends EvaluationRunDeleteArgs>(args: SelectSubset<T, EvaluationRunDeleteArgs<ExtArgs>>): Prisma__EvaluationRunClient<$Result.GetResult<Prisma.$EvaluationRunPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EvaluationRun.
     * @param {EvaluationRunUpdateArgs} args - Arguments to update one EvaluationRun.
     * @example
     * // Update one EvaluationRun
     * const evaluationRun = await prisma.evaluationRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvaluationRunUpdateArgs>(args: SelectSubset<T, EvaluationRunUpdateArgs<ExtArgs>>): Prisma__EvaluationRunClient<$Result.GetResult<Prisma.$EvaluationRunPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EvaluationRuns.
     * @param {EvaluationRunDeleteManyArgs} args - Arguments to filter EvaluationRuns to delete.
     * @example
     * // Delete a few EvaluationRuns
     * const { count } = await prisma.evaluationRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvaluationRunDeleteManyArgs>(args?: SelectSubset<T, EvaluationRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvaluationRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EvaluationRuns
     * const evaluationRun = await prisma.evaluationRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvaluationRunUpdateManyArgs>(args: SelectSubset<T, EvaluationRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EvaluationRun.
     * @param {EvaluationRunUpsertArgs} args - Arguments to update or create a EvaluationRun.
     * @example
     * // Update or create a EvaluationRun
     * const evaluationRun = await prisma.evaluationRun.upsert({
     *   create: {
     *     // ... data to create a EvaluationRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EvaluationRun we want to update
     *   }
     * })
     */
    upsert<T extends EvaluationRunUpsertArgs>(args: SelectSubset<T, EvaluationRunUpsertArgs<ExtArgs>>): Prisma__EvaluationRunClient<$Result.GetResult<Prisma.$EvaluationRunPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EvaluationRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationRunCountArgs} args - Arguments to filter EvaluationRuns to count.
     * @example
     * // Count the number of EvaluationRuns
     * const count = await prisma.evaluationRun.count({
     *   where: {
     *     // ... the filter for the EvaluationRuns we want to count
     *   }
     * })
    **/
    count<T extends EvaluationRunCountArgs>(
      args?: Subset<T, EvaluationRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluationRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EvaluationRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EvaluationRunAggregateArgs>(args: Subset<T, EvaluationRunAggregateArgs>): Prisma.PrismaPromise<GetEvaluationRunAggregateType<T>>

    /**
     * Group by EvaluationRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EvaluationRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvaluationRunGroupByArgs['orderBy'] }
        : { orderBy?: EvaluationRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EvaluationRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EvaluationRun model
   */
  readonly fields: EvaluationRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EvaluationRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvaluationRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EvaluationRun model
   */ 
  interface EvaluationRunFieldRefs {
    readonly id: FieldRef<"EvaluationRun", 'String'>
    readonly projectId: FieldRef<"EvaluationRun", 'String'>
    readonly trigger: FieldRef<"EvaluationRun", 'String'>
    readonly triggeredBy: FieldRef<"EvaluationRun", 'String'>
    readonly totalControls: FieldRef<"EvaluationRun", 'Int'>
    readonly passed: FieldRef<"EvaluationRun", 'Int'>
    readonly failed: FieldRef<"EvaluationRun", 'Int'>
    readonly manual: FieldRef<"EvaluationRun", 'Int'>
    readonly notApplicable: FieldRef<"EvaluationRun", 'Int'>
    readonly startedAt: FieldRef<"EvaluationRun", 'DateTime'>
    readonly completedAt: FieldRef<"EvaluationRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EvaluationRun findUnique
   */
  export type EvaluationRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationRun
     */
    select?: EvaluationRunSelect<ExtArgs> | null
    /**
     * Filter, which EvaluationRun to fetch.
     */
    where: EvaluationRunWhereUniqueInput
  }

  /**
   * EvaluationRun findUniqueOrThrow
   */
  export type EvaluationRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationRun
     */
    select?: EvaluationRunSelect<ExtArgs> | null
    /**
     * Filter, which EvaluationRun to fetch.
     */
    where: EvaluationRunWhereUniqueInput
  }

  /**
   * EvaluationRun findFirst
   */
  export type EvaluationRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationRun
     */
    select?: EvaluationRunSelect<ExtArgs> | null
    /**
     * Filter, which EvaluationRun to fetch.
     */
    where?: EvaluationRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationRuns to fetch.
     */
    orderBy?: EvaluationRunOrderByWithRelationInput | EvaluationRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvaluationRuns.
     */
    cursor?: EvaluationRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvaluationRuns.
     */
    distinct?: EvaluationRunScalarFieldEnum | EvaluationRunScalarFieldEnum[]
  }

  /**
   * EvaluationRun findFirstOrThrow
   */
  export type EvaluationRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationRun
     */
    select?: EvaluationRunSelect<ExtArgs> | null
    /**
     * Filter, which EvaluationRun to fetch.
     */
    where?: EvaluationRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationRuns to fetch.
     */
    orderBy?: EvaluationRunOrderByWithRelationInput | EvaluationRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvaluationRuns.
     */
    cursor?: EvaluationRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvaluationRuns.
     */
    distinct?: EvaluationRunScalarFieldEnum | EvaluationRunScalarFieldEnum[]
  }

  /**
   * EvaluationRun findMany
   */
  export type EvaluationRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationRun
     */
    select?: EvaluationRunSelect<ExtArgs> | null
    /**
     * Filter, which EvaluationRuns to fetch.
     */
    where?: EvaluationRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvaluationRuns to fetch.
     */
    orderBy?: EvaluationRunOrderByWithRelationInput | EvaluationRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EvaluationRuns.
     */
    cursor?: EvaluationRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvaluationRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvaluationRuns.
     */
    skip?: number
    distinct?: EvaluationRunScalarFieldEnum | EvaluationRunScalarFieldEnum[]
  }

  /**
   * EvaluationRun create
   */
  export type EvaluationRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationRun
     */
    select?: EvaluationRunSelect<ExtArgs> | null
    /**
     * The data needed to create a EvaluationRun.
     */
    data: XOR<EvaluationRunCreateInput, EvaluationRunUncheckedCreateInput>
  }

  /**
   * EvaluationRun createMany
   */
  export type EvaluationRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EvaluationRuns.
     */
    data: EvaluationRunCreateManyInput | EvaluationRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EvaluationRun createManyAndReturn
   */
  export type EvaluationRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationRun
     */
    select?: EvaluationRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EvaluationRuns.
     */
    data: EvaluationRunCreateManyInput | EvaluationRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EvaluationRun update
   */
  export type EvaluationRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationRun
     */
    select?: EvaluationRunSelect<ExtArgs> | null
    /**
     * The data needed to update a EvaluationRun.
     */
    data: XOR<EvaluationRunUpdateInput, EvaluationRunUncheckedUpdateInput>
    /**
     * Choose, which EvaluationRun to update.
     */
    where: EvaluationRunWhereUniqueInput
  }

  /**
   * EvaluationRun updateMany
   */
  export type EvaluationRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EvaluationRuns.
     */
    data: XOR<EvaluationRunUpdateManyMutationInput, EvaluationRunUncheckedUpdateManyInput>
    /**
     * Filter which EvaluationRuns to update
     */
    where?: EvaluationRunWhereInput
  }

  /**
   * EvaluationRun upsert
   */
  export type EvaluationRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationRun
     */
    select?: EvaluationRunSelect<ExtArgs> | null
    /**
     * The filter to search for the EvaluationRun to update in case it exists.
     */
    where: EvaluationRunWhereUniqueInput
    /**
     * In case the EvaluationRun found by the `where` argument doesn't exist, create a new EvaluationRun with this data.
     */
    create: XOR<EvaluationRunCreateInput, EvaluationRunUncheckedCreateInput>
    /**
     * In case the EvaluationRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvaluationRunUpdateInput, EvaluationRunUncheckedUpdateInput>
  }

  /**
   * EvaluationRun delete
   */
  export type EvaluationRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationRun
     */
    select?: EvaluationRunSelect<ExtArgs> | null
    /**
     * Filter which EvaluationRun to delete.
     */
    where: EvaluationRunWhereUniqueInput
  }

  /**
   * EvaluationRun deleteMany
   */
  export type EvaluationRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvaluationRuns to delete
     */
    where?: EvaluationRunWhereInput
  }

  /**
   * EvaluationRun without action
   */
  export type EvaluationRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvaluationRun
     */
    select?: EvaluationRunSelect<ExtArgs> | null
  }


  /**
   * Model Fact
   */

  export type AggregateFact = {
    _count: FactCountAggregateOutputType | null
    _min: FactMinAggregateOutputType | null
    _max: FactMaxAggregateOutputType | null
  }

  export type FactMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    key: string | null
    source: string | null
    sourceId: string | null
    collectedAt: Date | null
    expiresAt: Date | null
  }

  export type FactMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    key: string | null
    source: string | null
    sourceId: string | null
    collectedAt: Date | null
    expiresAt: Date | null
  }

  export type FactCountAggregateOutputType = {
    id: number
    projectId: number
    key: number
    value: number
    source: number
    sourceId: number
    metadata: number
    collectedAt: number
    expiresAt: number
    _all: number
  }


  export type FactMinAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    source?: true
    sourceId?: true
    collectedAt?: true
    expiresAt?: true
  }

  export type FactMaxAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    source?: true
    sourceId?: true
    collectedAt?: true
    expiresAt?: true
  }

  export type FactCountAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    value?: true
    source?: true
    sourceId?: true
    metadata?: true
    collectedAt?: true
    expiresAt?: true
    _all?: true
  }

  export type FactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fact to aggregate.
     */
    where?: FactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facts to fetch.
     */
    orderBy?: FactOrderByWithRelationInput | FactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facts
    **/
    _count?: true | FactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FactMaxAggregateInputType
  }

  export type GetFactAggregateType<T extends FactAggregateArgs> = {
        [P in keyof T & keyof AggregateFact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFact[P]>
      : GetScalarType<T[P], AggregateFact[P]>
  }




  export type FactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactWhereInput
    orderBy?: FactOrderByWithAggregationInput | FactOrderByWithAggregationInput[]
    by: FactScalarFieldEnum[] | FactScalarFieldEnum
    having?: FactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FactCountAggregateInputType | true
    _min?: FactMinAggregateInputType
    _max?: FactMaxAggregateInputType
  }

  export type FactGroupByOutputType = {
    id: string
    projectId: string
    key: string
    value: JsonValue
    source: string
    sourceId: string | null
    metadata: JsonValue | null
    collectedAt: Date
    expiresAt: Date | null
    _count: FactCountAggregateOutputType | null
    _min: FactMinAggregateOutputType | null
    _max: FactMaxAggregateOutputType | null
  }

  type GetFactGroupByPayload<T extends FactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FactGroupByOutputType[P]>
            : GetScalarType<T[P], FactGroupByOutputType[P]>
        }
      >
    >


  export type FactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    key?: boolean
    value?: boolean
    source?: boolean
    sourceId?: boolean
    metadata?: boolean
    collectedAt?: boolean
    expiresAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fact"]>

  export type FactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    key?: boolean
    value?: boolean
    source?: boolean
    sourceId?: boolean
    metadata?: boolean
    collectedAt?: boolean
    expiresAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fact"]>

  export type FactSelectScalar = {
    id?: boolean
    projectId?: boolean
    key?: boolean
    value?: boolean
    source?: boolean
    sourceId?: boolean
    metadata?: boolean
    collectedAt?: boolean
    expiresAt?: boolean
  }

  export type FactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type FactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $FactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fact"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      key: string
      value: Prisma.JsonValue
      source: string
      sourceId: string | null
      metadata: Prisma.JsonValue | null
      collectedAt: Date
      expiresAt: Date | null
    }, ExtArgs["result"]["fact"]>
    composites: {}
  }

  type FactGetPayload<S extends boolean | null | undefined | FactDefaultArgs> = $Result.GetResult<Prisma.$FactPayload, S>

  type FactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FactCountAggregateInputType | true
    }

  export interface FactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fact'], meta: { name: 'Fact' } }
    /**
     * Find zero or one Fact that matches the filter.
     * @param {FactFindUniqueArgs} args - Arguments to find a Fact
     * @example
     * // Get one Fact
     * const fact = await prisma.fact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FactFindUniqueArgs>(args: SelectSubset<T, FactFindUniqueArgs<ExtArgs>>): Prisma__FactClient<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Fact that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FactFindUniqueOrThrowArgs} args - Arguments to find a Fact
     * @example
     * // Get one Fact
     * const fact = await prisma.fact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FactFindUniqueOrThrowArgs>(args: SelectSubset<T, FactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FactClient<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Fact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactFindFirstArgs} args - Arguments to find a Fact
     * @example
     * // Get one Fact
     * const fact = await prisma.fact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FactFindFirstArgs>(args?: SelectSubset<T, FactFindFirstArgs<ExtArgs>>): Prisma__FactClient<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Fact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactFindFirstOrThrowArgs} args - Arguments to find a Fact
     * @example
     * // Get one Fact
     * const fact = await prisma.fact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FactFindFirstOrThrowArgs>(args?: SelectSubset<T, FactFindFirstOrThrowArgs<ExtArgs>>): Prisma__FactClient<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Facts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facts
     * const facts = await prisma.fact.findMany()
     * 
     * // Get first 10 Facts
     * const facts = await prisma.fact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const factWithIdOnly = await prisma.fact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FactFindManyArgs>(args?: SelectSubset<T, FactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Fact.
     * @param {FactCreateArgs} args - Arguments to create a Fact.
     * @example
     * // Create one Fact
     * const Fact = await prisma.fact.create({
     *   data: {
     *     // ... data to create a Fact
     *   }
     * })
     * 
     */
    create<T extends FactCreateArgs>(args: SelectSubset<T, FactCreateArgs<ExtArgs>>): Prisma__FactClient<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Facts.
     * @param {FactCreateManyArgs} args - Arguments to create many Facts.
     * @example
     * // Create many Facts
     * const fact = await prisma.fact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FactCreateManyArgs>(args?: SelectSubset<T, FactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facts and returns the data saved in the database.
     * @param {FactCreateManyAndReturnArgs} args - Arguments to create many Facts.
     * @example
     * // Create many Facts
     * const fact = await prisma.fact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facts and only return the `id`
     * const factWithIdOnly = await prisma.fact.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FactCreateManyAndReturnArgs>(args?: SelectSubset<T, FactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Fact.
     * @param {FactDeleteArgs} args - Arguments to delete one Fact.
     * @example
     * // Delete one Fact
     * const Fact = await prisma.fact.delete({
     *   where: {
     *     // ... filter to delete one Fact
     *   }
     * })
     * 
     */
    delete<T extends FactDeleteArgs>(args: SelectSubset<T, FactDeleteArgs<ExtArgs>>): Prisma__FactClient<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Fact.
     * @param {FactUpdateArgs} args - Arguments to update one Fact.
     * @example
     * // Update one Fact
     * const fact = await prisma.fact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FactUpdateArgs>(args: SelectSubset<T, FactUpdateArgs<ExtArgs>>): Prisma__FactClient<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Facts.
     * @param {FactDeleteManyArgs} args - Arguments to filter Facts to delete.
     * @example
     * // Delete a few Facts
     * const { count } = await prisma.fact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FactDeleteManyArgs>(args?: SelectSubset<T, FactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facts
     * const fact = await prisma.fact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FactUpdateManyArgs>(args: SelectSubset<T, FactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fact.
     * @param {FactUpsertArgs} args - Arguments to update or create a Fact.
     * @example
     * // Update or create a Fact
     * const fact = await prisma.fact.upsert({
     *   create: {
     *     // ... data to create a Fact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fact we want to update
     *   }
     * })
     */
    upsert<T extends FactUpsertArgs>(args: SelectSubset<T, FactUpsertArgs<ExtArgs>>): Prisma__FactClient<$Result.GetResult<Prisma.$FactPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Facts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactCountArgs} args - Arguments to filter Facts to count.
     * @example
     * // Count the number of Facts
     * const count = await prisma.fact.count({
     *   where: {
     *     // ... the filter for the Facts we want to count
     *   }
     * })
    **/
    count<T extends FactCountArgs>(
      args?: Subset<T, FactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FactAggregateArgs>(args: Subset<T, FactAggregateArgs>): Prisma.PrismaPromise<GetFactAggregateType<T>>

    /**
     * Group by Fact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FactGroupByArgs['orderBy'] }
        : { orderBy?: FactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fact model
   */
  readonly fields: FactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fact model
   */ 
  interface FactFieldRefs {
    readonly id: FieldRef<"Fact", 'String'>
    readonly projectId: FieldRef<"Fact", 'String'>
    readonly key: FieldRef<"Fact", 'String'>
    readonly value: FieldRef<"Fact", 'Json'>
    readonly source: FieldRef<"Fact", 'String'>
    readonly sourceId: FieldRef<"Fact", 'String'>
    readonly metadata: FieldRef<"Fact", 'Json'>
    readonly collectedAt: FieldRef<"Fact", 'DateTime'>
    readonly expiresAt: FieldRef<"Fact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fact findUnique
   */
  export type FactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * Filter, which Fact to fetch.
     */
    where: FactWhereUniqueInput
  }

  /**
   * Fact findUniqueOrThrow
   */
  export type FactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * Filter, which Fact to fetch.
     */
    where: FactWhereUniqueInput
  }

  /**
   * Fact findFirst
   */
  export type FactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * Filter, which Fact to fetch.
     */
    where?: FactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facts to fetch.
     */
    orderBy?: FactOrderByWithRelationInput | FactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facts.
     */
    cursor?: FactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facts.
     */
    distinct?: FactScalarFieldEnum | FactScalarFieldEnum[]
  }

  /**
   * Fact findFirstOrThrow
   */
  export type FactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * Filter, which Fact to fetch.
     */
    where?: FactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facts to fetch.
     */
    orderBy?: FactOrderByWithRelationInput | FactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facts.
     */
    cursor?: FactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facts.
     */
    distinct?: FactScalarFieldEnum | FactScalarFieldEnum[]
  }

  /**
   * Fact findMany
   */
  export type FactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * Filter, which Facts to fetch.
     */
    where?: FactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facts to fetch.
     */
    orderBy?: FactOrderByWithRelationInput | FactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facts.
     */
    cursor?: FactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facts.
     */
    skip?: number
    distinct?: FactScalarFieldEnum | FactScalarFieldEnum[]
  }

  /**
   * Fact create
   */
  export type FactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * The data needed to create a Fact.
     */
    data: XOR<FactCreateInput, FactUncheckedCreateInput>
  }

  /**
   * Fact createMany
   */
  export type FactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facts.
     */
    data: FactCreateManyInput | FactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fact createManyAndReturn
   */
  export type FactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Facts.
     */
    data: FactCreateManyInput | FactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fact update
   */
  export type FactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * The data needed to update a Fact.
     */
    data: XOR<FactUpdateInput, FactUncheckedUpdateInput>
    /**
     * Choose, which Fact to update.
     */
    where: FactWhereUniqueInput
  }

  /**
   * Fact updateMany
   */
  export type FactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facts.
     */
    data: XOR<FactUpdateManyMutationInput, FactUncheckedUpdateManyInput>
    /**
     * Filter which Facts to update
     */
    where?: FactWhereInput
  }

  /**
   * Fact upsert
   */
  export type FactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * The filter to search for the Fact to update in case it exists.
     */
    where: FactWhereUniqueInput
    /**
     * In case the Fact found by the `where` argument doesn't exist, create a new Fact with this data.
     */
    create: XOR<FactCreateInput, FactUncheckedCreateInput>
    /**
     * In case the Fact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FactUpdateInput, FactUncheckedUpdateInput>
  }

  /**
   * Fact delete
   */
  export type FactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
    /**
     * Filter which Fact to delete.
     */
    where: FactWhereUniqueInput
  }

  /**
   * Fact deleteMany
   */
  export type FactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facts to delete
     */
    where?: FactWhereInput
  }

  /**
   * Fact without action
   */
  export type FactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fact
     */
    select?: FactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactInclude<ExtArgs> | null
  }


  /**
   * Model PolicySegment
   */

  export type AggregatePolicySegment = {
    _count: PolicySegmentCountAggregateOutputType | null
    _avg: PolicySegmentAvgAggregateOutputType | null
    _sum: PolicySegmentSumAggregateOutputType | null
    _min: PolicySegmentMinAggregateOutputType | null
    _max: PolicySegmentMaxAggregateOutputType | null
  }

  export type PolicySegmentAvgAggregateOutputType = {
    lineNumber: number | null
    embedding: number | null
  }

  export type PolicySegmentSumAggregateOutputType = {
    lineNumber: number | null
    embedding: number[]
  }

  export type PolicySegmentMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    path: string | null
    lineNumber: number | null
    text: string | null
    version: string | null
    baselineHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolicySegmentMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    path: string | null
    lineNumber: number | null
    text: string | null
    version: string | null
    baselineHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolicySegmentCountAggregateOutputType = {
    id: number
    projectId: number
    path: number
    lineNumber: number
    text: number
    embedding: number
    version: number
    baselineHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PolicySegmentAvgAggregateInputType = {
    lineNumber?: true
    embedding?: true
  }

  export type PolicySegmentSumAggregateInputType = {
    lineNumber?: true
    embedding?: true
  }

  export type PolicySegmentMinAggregateInputType = {
    id?: true
    projectId?: true
    path?: true
    lineNumber?: true
    text?: true
    version?: true
    baselineHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolicySegmentMaxAggregateInputType = {
    id?: true
    projectId?: true
    path?: true
    lineNumber?: true
    text?: true
    version?: true
    baselineHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolicySegmentCountAggregateInputType = {
    id?: true
    projectId?: true
    path?: true
    lineNumber?: true
    text?: true
    embedding?: true
    version?: true
    baselineHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PolicySegmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolicySegment to aggregate.
     */
    where?: PolicySegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicySegments to fetch.
     */
    orderBy?: PolicySegmentOrderByWithRelationInput | PolicySegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolicySegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicySegments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicySegments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PolicySegments
    **/
    _count?: true | PolicySegmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicySegmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicySegmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicySegmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicySegmentMaxAggregateInputType
  }

  export type GetPolicySegmentAggregateType<T extends PolicySegmentAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicySegment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicySegment[P]>
      : GetScalarType<T[P], AggregatePolicySegment[P]>
  }




  export type PolicySegmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicySegmentWhereInput
    orderBy?: PolicySegmentOrderByWithAggregationInput | PolicySegmentOrderByWithAggregationInput[]
    by: PolicySegmentScalarFieldEnum[] | PolicySegmentScalarFieldEnum
    having?: PolicySegmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicySegmentCountAggregateInputType | true
    _avg?: PolicySegmentAvgAggregateInputType
    _sum?: PolicySegmentSumAggregateInputType
    _min?: PolicySegmentMinAggregateInputType
    _max?: PolicySegmentMaxAggregateInputType
  }

  export type PolicySegmentGroupByOutputType = {
    id: string
    projectId: string
    path: string
    lineNumber: number | null
    text: string
    embedding: number[]
    version: string
    baselineHash: string
    createdAt: Date
    updatedAt: Date
    _count: PolicySegmentCountAggregateOutputType | null
    _avg: PolicySegmentAvgAggregateOutputType | null
    _sum: PolicySegmentSumAggregateOutputType | null
    _min: PolicySegmentMinAggregateOutputType | null
    _max: PolicySegmentMaxAggregateOutputType | null
  }

  type GetPolicySegmentGroupByPayload<T extends PolicySegmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicySegmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicySegmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicySegmentGroupByOutputType[P]>
            : GetScalarType<T[P], PolicySegmentGroupByOutputType[P]>
        }
      >
    >


  export type PolicySegmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    path?: boolean
    lineNumber?: boolean
    text?: boolean
    embedding?: boolean
    version?: boolean
    baselineHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["policySegment"]>

  export type PolicySegmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    path?: boolean
    lineNumber?: boolean
    text?: boolean
    embedding?: boolean
    version?: boolean
    baselineHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["policySegment"]>

  export type PolicySegmentSelectScalar = {
    id?: boolean
    projectId?: boolean
    path?: boolean
    lineNumber?: boolean
    text?: boolean
    embedding?: boolean
    version?: boolean
    baselineHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PolicySegmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PolicySegment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      path: string
      lineNumber: number | null
      text: string
      embedding: number[]
      version: string
      baselineHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["policySegment"]>
    composites: {}
  }

  type PolicySegmentGetPayload<S extends boolean | null | undefined | PolicySegmentDefaultArgs> = $Result.GetResult<Prisma.$PolicySegmentPayload, S>

  type PolicySegmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PolicySegmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PolicySegmentCountAggregateInputType | true
    }

  export interface PolicySegmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PolicySegment'], meta: { name: 'PolicySegment' } }
    /**
     * Find zero or one PolicySegment that matches the filter.
     * @param {PolicySegmentFindUniqueArgs} args - Arguments to find a PolicySegment
     * @example
     * // Get one PolicySegment
     * const policySegment = await prisma.policySegment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolicySegmentFindUniqueArgs>(args: SelectSubset<T, PolicySegmentFindUniqueArgs<ExtArgs>>): Prisma__PolicySegmentClient<$Result.GetResult<Prisma.$PolicySegmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PolicySegment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PolicySegmentFindUniqueOrThrowArgs} args - Arguments to find a PolicySegment
     * @example
     * // Get one PolicySegment
     * const policySegment = await prisma.policySegment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolicySegmentFindUniqueOrThrowArgs>(args: SelectSubset<T, PolicySegmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolicySegmentClient<$Result.GetResult<Prisma.$PolicySegmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PolicySegment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicySegmentFindFirstArgs} args - Arguments to find a PolicySegment
     * @example
     * // Get one PolicySegment
     * const policySegment = await prisma.policySegment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolicySegmentFindFirstArgs>(args?: SelectSubset<T, PolicySegmentFindFirstArgs<ExtArgs>>): Prisma__PolicySegmentClient<$Result.GetResult<Prisma.$PolicySegmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PolicySegment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicySegmentFindFirstOrThrowArgs} args - Arguments to find a PolicySegment
     * @example
     * // Get one PolicySegment
     * const policySegment = await prisma.policySegment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolicySegmentFindFirstOrThrowArgs>(args?: SelectSubset<T, PolicySegmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolicySegmentClient<$Result.GetResult<Prisma.$PolicySegmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PolicySegments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicySegmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PolicySegments
     * const policySegments = await prisma.policySegment.findMany()
     * 
     * // Get first 10 PolicySegments
     * const policySegments = await prisma.policySegment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policySegmentWithIdOnly = await prisma.policySegment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolicySegmentFindManyArgs>(args?: SelectSubset<T, PolicySegmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicySegmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PolicySegment.
     * @param {PolicySegmentCreateArgs} args - Arguments to create a PolicySegment.
     * @example
     * // Create one PolicySegment
     * const PolicySegment = await prisma.policySegment.create({
     *   data: {
     *     // ... data to create a PolicySegment
     *   }
     * })
     * 
     */
    create<T extends PolicySegmentCreateArgs>(args: SelectSubset<T, PolicySegmentCreateArgs<ExtArgs>>): Prisma__PolicySegmentClient<$Result.GetResult<Prisma.$PolicySegmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PolicySegments.
     * @param {PolicySegmentCreateManyArgs} args - Arguments to create many PolicySegments.
     * @example
     * // Create many PolicySegments
     * const policySegment = await prisma.policySegment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolicySegmentCreateManyArgs>(args?: SelectSubset<T, PolicySegmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PolicySegments and returns the data saved in the database.
     * @param {PolicySegmentCreateManyAndReturnArgs} args - Arguments to create many PolicySegments.
     * @example
     * // Create many PolicySegments
     * const policySegment = await prisma.policySegment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PolicySegments and only return the `id`
     * const policySegmentWithIdOnly = await prisma.policySegment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolicySegmentCreateManyAndReturnArgs>(args?: SelectSubset<T, PolicySegmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicySegmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PolicySegment.
     * @param {PolicySegmentDeleteArgs} args - Arguments to delete one PolicySegment.
     * @example
     * // Delete one PolicySegment
     * const PolicySegment = await prisma.policySegment.delete({
     *   where: {
     *     // ... filter to delete one PolicySegment
     *   }
     * })
     * 
     */
    delete<T extends PolicySegmentDeleteArgs>(args: SelectSubset<T, PolicySegmentDeleteArgs<ExtArgs>>): Prisma__PolicySegmentClient<$Result.GetResult<Prisma.$PolicySegmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PolicySegment.
     * @param {PolicySegmentUpdateArgs} args - Arguments to update one PolicySegment.
     * @example
     * // Update one PolicySegment
     * const policySegment = await prisma.policySegment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolicySegmentUpdateArgs>(args: SelectSubset<T, PolicySegmentUpdateArgs<ExtArgs>>): Prisma__PolicySegmentClient<$Result.GetResult<Prisma.$PolicySegmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PolicySegments.
     * @param {PolicySegmentDeleteManyArgs} args - Arguments to filter PolicySegments to delete.
     * @example
     * // Delete a few PolicySegments
     * const { count } = await prisma.policySegment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolicySegmentDeleteManyArgs>(args?: SelectSubset<T, PolicySegmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PolicySegments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicySegmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PolicySegments
     * const policySegment = await prisma.policySegment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolicySegmentUpdateManyArgs>(args: SelectSubset<T, PolicySegmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PolicySegment.
     * @param {PolicySegmentUpsertArgs} args - Arguments to update or create a PolicySegment.
     * @example
     * // Update or create a PolicySegment
     * const policySegment = await prisma.policySegment.upsert({
     *   create: {
     *     // ... data to create a PolicySegment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PolicySegment we want to update
     *   }
     * })
     */
    upsert<T extends PolicySegmentUpsertArgs>(args: SelectSubset<T, PolicySegmentUpsertArgs<ExtArgs>>): Prisma__PolicySegmentClient<$Result.GetResult<Prisma.$PolicySegmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PolicySegments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicySegmentCountArgs} args - Arguments to filter PolicySegments to count.
     * @example
     * // Count the number of PolicySegments
     * const count = await prisma.policySegment.count({
     *   where: {
     *     // ... the filter for the PolicySegments we want to count
     *   }
     * })
    **/
    count<T extends PolicySegmentCountArgs>(
      args?: Subset<T, PolicySegmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicySegmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PolicySegment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicySegmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PolicySegmentAggregateArgs>(args: Subset<T, PolicySegmentAggregateArgs>): Prisma.PrismaPromise<GetPolicySegmentAggregateType<T>>

    /**
     * Group by PolicySegment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicySegmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PolicySegmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicySegmentGroupByArgs['orderBy'] }
        : { orderBy?: PolicySegmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PolicySegmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicySegmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PolicySegment model
   */
  readonly fields: PolicySegmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PolicySegment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolicySegmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PolicySegment model
   */ 
  interface PolicySegmentFieldRefs {
    readonly id: FieldRef<"PolicySegment", 'String'>
    readonly projectId: FieldRef<"PolicySegment", 'String'>
    readonly path: FieldRef<"PolicySegment", 'String'>
    readonly lineNumber: FieldRef<"PolicySegment", 'Int'>
    readonly text: FieldRef<"PolicySegment", 'String'>
    readonly embedding: FieldRef<"PolicySegment", 'Float[]'>
    readonly version: FieldRef<"PolicySegment", 'String'>
    readonly baselineHash: FieldRef<"PolicySegment", 'String'>
    readonly createdAt: FieldRef<"PolicySegment", 'DateTime'>
    readonly updatedAt: FieldRef<"PolicySegment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PolicySegment findUnique
   */
  export type PolicySegmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicySegment
     */
    select?: PolicySegmentSelect<ExtArgs> | null
    /**
     * Filter, which PolicySegment to fetch.
     */
    where: PolicySegmentWhereUniqueInput
  }

  /**
   * PolicySegment findUniqueOrThrow
   */
  export type PolicySegmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicySegment
     */
    select?: PolicySegmentSelect<ExtArgs> | null
    /**
     * Filter, which PolicySegment to fetch.
     */
    where: PolicySegmentWhereUniqueInput
  }

  /**
   * PolicySegment findFirst
   */
  export type PolicySegmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicySegment
     */
    select?: PolicySegmentSelect<ExtArgs> | null
    /**
     * Filter, which PolicySegment to fetch.
     */
    where?: PolicySegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicySegments to fetch.
     */
    orderBy?: PolicySegmentOrderByWithRelationInput | PolicySegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolicySegments.
     */
    cursor?: PolicySegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicySegments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicySegments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicySegments.
     */
    distinct?: PolicySegmentScalarFieldEnum | PolicySegmentScalarFieldEnum[]
  }

  /**
   * PolicySegment findFirstOrThrow
   */
  export type PolicySegmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicySegment
     */
    select?: PolicySegmentSelect<ExtArgs> | null
    /**
     * Filter, which PolicySegment to fetch.
     */
    where?: PolicySegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicySegments to fetch.
     */
    orderBy?: PolicySegmentOrderByWithRelationInput | PolicySegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolicySegments.
     */
    cursor?: PolicySegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicySegments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicySegments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicySegments.
     */
    distinct?: PolicySegmentScalarFieldEnum | PolicySegmentScalarFieldEnum[]
  }

  /**
   * PolicySegment findMany
   */
  export type PolicySegmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicySegment
     */
    select?: PolicySegmentSelect<ExtArgs> | null
    /**
     * Filter, which PolicySegments to fetch.
     */
    where?: PolicySegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicySegments to fetch.
     */
    orderBy?: PolicySegmentOrderByWithRelationInput | PolicySegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PolicySegments.
     */
    cursor?: PolicySegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicySegments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicySegments.
     */
    skip?: number
    distinct?: PolicySegmentScalarFieldEnum | PolicySegmentScalarFieldEnum[]
  }

  /**
   * PolicySegment create
   */
  export type PolicySegmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicySegment
     */
    select?: PolicySegmentSelect<ExtArgs> | null
    /**
     * The data needed to create a PolicySegment.
     */
    data: XOR<PolicySegmentCreateInput, PolicySegmentUncheckedCreateInput>
  }

  /**
   * PolicySegment createMany
   */
  export type PolicySegmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PolicySegments.
     */
    data: PolicySegmentCreateManyInput | PolicySegmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PolicySegment createManyAndReturn
   */
  export type PolicySegmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicySegment
     */
    select?: PolicySegmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PolicySegments.
     */
    data: PolicySegmentCreateManyInput | PolicySegmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PolicySegment update
   */
  export type PolicySegmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicySegment
     */
    select?: PolicySegmentSelect<ExtArgs> | null
    /**
     * The data needed to update a PolicySegment.
     */
    data: XOR<PolicySegmentUpdateInput, PolicySegmentUncheckedUpdateInput>
    /**
     * Choose, which PolicySegment to update.
     */
    where: PolicySegmentWhereUniqueInput
  }

  /**
   * PolicySegment updateMany
   */
  export type PolicySegmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PolicySegments.
     */
    data: XOR<PolicySegmentUpdateManyMutationInput, PolicySegmentUncheckedUpdateManyInput>
    /**
     * Filter which PolicySegments to update
     */
    where?: PolicySegmentWhereInput
  }

  /**
   * PolicySegment upsert
   */
  export type PolicySegmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicySegment
     */
    select?: PolicySegmentSelect<ExtArgs> | null
    /**
     * The filter to search for the PolicySegment to update in case it exists.
     */
    where: PolicySegmentWhereUniqueInput
    /**
     * In case the PolicySegment found by the `where` argument doesn't exist, create a new PolicySegment with this data.
     */
    create: XOR<PolicySegmentCreateInput, PolicySegmentUncheckedCreateInput>
    /**
     * In case the PolicySegment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolicySegmentUpdateInput, PolicySegmentUncheckedUpdateInput>
  }

  /**
   * PolicySegment delete
   */
  export type PolicySegmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicySegment
     */
    select?: PolicySegmentSelect<ExtArgs> | null
    /**
     * Filter which PolicySegment to delete.
     */
    where: PolicySegmentWhereUniqueInput
  }

  /**
   * PolicySegment deleteMany
   */
  export type PolicySegmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolicySegments to delete
     */
    where?: PolicySegmentWhereInput
  }

  /**
   * PolicySegment without action
   */
  export type PolicySegmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicySegment
     */
    select?: PolicySegmentSelect<ExtArgs> | null
  }


  /**
   * Model VcStatus
   */

  export type AggregateVcStatus = {
    _count: VcStatusCountAggregateOutputType | null
    _min: VcStatusMinAggregateOutputType | null
    _max: VcStatusMaxAggregateOutputType | null
  }

  export type VcStatusMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    subjectDid: string | null
    vcId: string | null
    vcType: string | null
    state: $Enums.VcState | null
    notBefore: Date | null
    notAfter: Date | null
    issuerDid: string | null
    lastChecked: Date | null
  }

  export type VcStatusMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    subjectDid: string | null
    vcId: string | null
    vcType: string | null
    state: $Enums.VcState | null
    notBefore: Date | null
    notAfter: Date | null
    issuerDid: string | null
    lastChecked: Date | null
  }

  export type VcStatusCountAggregateOutputType = {
    id: number
    projectId: number
    subjectDid: number
    vcId: number
    vcType: number
    state: number
    notBefore: number
    notAfter: number
    issuerDid: number
    lastChecked: number
    _all: number
  }


  export type VcStatusMinAggregateInputType = {
    id?: true
    projectId?: true
    subjectDid?: true
    vcId?: true
    vcType?: true
    state?: true
    notBefore?: true
    notAfter?: true
    issuerDid?: true
    lastChecked?: true
  }

  export type VcStatusMaxAggregateInputType = {
    id?: true
    projectId?: true
    subjectDid?: true
    vcId?: true
    vcType?: true
    state?: true
    notBefore?: true
    notAfter?: true
    issuerDid?: true
    lastChecked?: true
  }

  export type VcStatusCountAggregateInputType = {
    id?: true
    projectId?: true
    subjectDid?: true
    vcId?: true
    vcType?: true
    state?: true
    notBefore?: true
    notAfter?: true
    issuerDid?: true
    lastChecked?: true
    _all?: true
  }

  export type VcStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VcStatus to aggregate.
     */
    where?: VcStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VcStatuses to fetch.
     */
    orderBy?: VcStatusOrderByWithRelationInput | VcStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VcStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VcStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VcStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VcStatuses
    **/
    _count?: true | VcStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VcStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VcStatusMaxAggregateInputType
  }

  export type GetVcStatusAggregateType<T extends VcStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateVcStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVcStatus[P]>
      : GetScalarType<T[P], AggregateVcStatus[P]>
  }




  export type VcStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VcStatusWhereInput
    orderBy?: VcStatusOrderByWithAggregationInput | VcStatusOrderByWithAggregationInput[]
    by: VcStatusScalarFieldEnum[] | VcStatusScalarFieldEnum
    having?: VcStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VcStatusCountAggregateInputType | true
    _min?: VcStatusMinAggregateInputType
    _max?: VcStatusMaxAggregateInputType
  }

  export type VcStatusGroupByOutputType = {
    id: string
    projectId: string
    subjectDid: string
    vcId: string
    vcType: string
    state: $Enums.VcState
    notBefore: Date
    notAfter: Date
    issuerDid: string
    lastChecked: Date
    _count: VcStatusCountAggregateOutputType | null
    _min: VcStatusMinAggregateOutputType | null
    _max: VcStatusMaxAggregateOutputType | null
  }

  type GetVcStatusGroupByPayload<T extends VcStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VcStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VcStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VcStatusGroupByOutputType[P]>
            : GetScalarType<T[P], VcStatusGroupByOutputType[P]>
        }
      >
    >


  export type VcStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    subjectDid?: boolean
    vcId?: boolean
    vcType?: boolean
    state?: boolean
    notBefore?: boolean
    notAfter?: boolean
    issuerDid?: boolean
    lastChecked?: boolean
  }, ExtArgs["result"]["vcStatus"]>

  export type VcStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    subjectDid?: boolean
    vcId?: boolean
    vcType?: boolean
    state?: boolean
    notBefore?: boolean
    notAfter?: boolean
    issuerDid?: boolean
    lastChecked?: boolean
  }, ExtArgs["result"]["vcStatus"]>

  export type VcStatusSelectScalar = {
    id?: boolean
    projectId?: boolean
    subjectDid?: boolean
    vcId?: boolean
    vcType?: boolean
    state?: boolean
    notBefore?: boolean
    notAfter?: boolean
    issuerDid?: boolean
    lastChecked?: boolean
  }


  export type $VcStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VcStatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      subjectDid: string
      vcId: string
      vcType: string
      state: $Enums.VcState
      notBefore: Date
      notAfter: Date
      issuerDid: string
      lastChecked: Date
    }, ExtArgs["result"]["vcStatus"]>
    composites: {}
  }

  type VcStatusGetPayload<S extends boolean | null | undefined | VcStatusDefaultArgs> = $Result.GetResult<Prisma.$VcStatusPayload, S>

  type VcStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VcStatusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VcStatusCountAggregateInputType | true
    }

  export interface VcStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VcStatus'], meta: { name: 'VcStatus' } }
    /**
     * Find zero or one VcStatus that matches the filter.
     * @param {VcStatusFindUniqueArgs} args - Arguments to find a VcStatus
     * @example
     * // Get one VcStatus
     * const vcStatus = await prisma.vcStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VcStatusFindUniqueArgs>(args: SelectSubset<T, VcStatusFindUniqueArgs<ExtArgs>>): Prisma__VcStatusClient<$Result.GetResult<Prisma.$VcStatusPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VcStatus that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VcStatusFindUniqueOrThrowArgs} args - Arguments to find a VcStatus
     * @example
     * // Get one VcStatus
     * const vcStatus = await prisma.vcStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VcStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, VcStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VcStatusClient<$Result.GetResult<Prisma.$VcStatusPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VcStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcStatusFindFirstArgs} args - Arguments to find a VcStatus
     * @example
     * // Get one VcStatus
     * const vcStatus = await prisma.vcStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VcStatusFindFirstArgs>(args?: SelectSubset<T, VcStatusFindFirstArgs<ExtArgs>>): Prisma__VcStatusClient<$Result.GetResult<Prisma.$VcStatusPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VcStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcStatusFindFirstOrThrowArgs} args - Arguments to find a VcStatus
     * @example
     * // Get one VcStatus
     * const vcStatus = await prisma.vcStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VcStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, VcStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__VcStatusClient<$Result.GetResult<Prisma.$VcStatusPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VcStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VcStatuses
     * const vcStatuses = await prisma.vcStatus.findMany()
     * 
     * // Get first 10 VcStatuses
     * const vcStatuses = await prisma.vcStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vcStatusWithIdOnly = await prisma.vcStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VcStatusFindManyArgs>(args?: SelectSubset<T, VcStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VcStatusPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VcStatus.
     * @param {VcStatusCreateArgs} args - Arguments to create a VcStatus.
     * @example
     * // Create one VcStatus
     * const VcStatus = await prisma.vcStatus.create({
     *   data: {
     *     // ... data to create a VcStatus
     *   }
     * })
     * 
     */
    create<T extends VcStatusCreateArgs>(args: SelectSubset<T, VcStatusCreateArgs<ExtArgs>>): Prisma__VcStatusClient<$Result.GetResult<Prisma.$VcStatusPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VcStatuses.
     * @param {VcStatusCreateManyArgs} args - Arguments to create many VcStatuses.
     * @example
     * // Create many VcStatuses
     * const vcStatus = await prisma.vcStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VcStatusCreateManyArgs>(args?: SelectSubset<T, VcStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VcStatuses and returns the data saved in the database.
     * @param {VcStatusCreateManyAndReturnArgs} args - Arguments to create many VcStatuses.
     * @example
     * // Create many VcStatuses
     * const vcStatus = await prisma.vcStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VcStatuses and only return the `id`
     * const vcStatusWithIdOnly = await prisma.vcStatus.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VcStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, VcStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VcStatusPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VcStatus.
     * @param {VcStatusDeleteArgs} args - Arguments to delete one VcStatus.
     * @example
     * // Delete one VcStatus
     * const VcStatus = await prisma.vcStatus.delete({
     *   where: {
     *     // ... filter to delete one VcStatus
     *   }
     * })
     * 
     */
    delete<T extends VcStatusDeleteArgs>(args: SelectSubset<T, VcStatusDeleteArgs<ExtArgs>>): Prisma__VcStatusClient<$Result.GetResult<Prisma.$VcStatusPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VcStatus.
     * @param {VcStatusUpdateArgs} args - Arguments to update one VcStatus.
     * @example
     * // Update one VcStatus
     * const vcStatus = await prisma.vcStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VcStatusUpdateArgs>(args: SelectSubset<T, VcStatusUpdateArgs<ExtArgs>>): Prisma__VcStatusClient<$Result.GetResult<Prisma.$VcStatusPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VcStatuses.
     * @param {VcStatusDeleteManyArgs} args - Arguments to filter VcStatuses to delete.
     * @example
     * // Delete a few VcStatuses
     * const { count } = await prisma.vcStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VcStatusDeleteManyArgs>(args?: SelectSubset<T, VcStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VcStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VcStatuses
     * const vcStatus = await prisma.vcStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VcStatusUpdateManyArgs>(args: SelectSubset<T, VcStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VcStatus.
     * @param {VcStatusUpsertArgs} args - Arguments to update or create a VcStatus.
     * @example
     * // Update or create a VcStatus
     * const vcStatus = await prisma.vcStatus.upsert({
     *   create: {
     *     // ... data to create a VcStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VcStatus we want to update
     *   }
     * })
     */
    upsert<T extends VcStatusUpsertArgs>(args: SelectSubset<T, VcStatusUpsertArgs<ExtArgs>>): Prisma__VcStatusClient<$Result.GetResult<Prisma.$VcStatusPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VcStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcStatusCountArgs} args - Arguments to filter VcStatuses to count.
     * @example
     * // Count the number of VcStatuses
     * const count = await prisma.vcStatus.count({
     *   where: {
     *     // ... the filter for the VcStatuses we want to count
     *   }
     * })
    **/
    count<T extends VcStatusCountArgs>(
      args?: Subset<T, VcStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VcStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VcStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VcStatusAggregateArgs>(args: Subset<T, VcStatusAggregateArgs>): Prisma.PrismaPromise<GetVcStatusAggregateType<T>>

    /**
     * Group by VcStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VcStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VcStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VcStatusGroupByArgs['orderBy'] }
        : { orderBy?: VcStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VcStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVcStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VcStatus model
   */
  readonly fields: VcStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VcStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VcStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VcStatus model
   */ 
  interface VcStatusFieldRefs {
    readonly id: FieldRef<"VcStatus", 'String'>
    readonly projectId: FieldRef<"VcStatus", 'String'>
    readonly subjectDid: FieldRef<"VcStatus", 'String'>
    readonly vcId: FieldRef<"VcStatus", 'String'>
    readonly vcType: FieldRef<"VcStatus", 'String'>
    readonly state: FieldRef<"VcStatus", 'VcState'>
    readonly notBefore: FieldRef<"VcStatus", 'DateTime'>
    readonly notAfter: FieldRef<"VcStatus", 'DateTime'>
    readonly issuerDid: FieldRef<"VcStatus", 'String'>
    readonly lastChecked: FieldRef<"VcStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VcStatus findUnique
   */
  export type VcStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcStatus
     */
    select?: VcStatusSelect<ExtArgs> | null
    /**
     * Filter, which VcStatus to fetch.
     */
    where: VcStatusWhereUniqueInput
  }

  /**
   * VcStatus findUniqueOrThrow
   */
  export type VcStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcStatus
     */
    select?: VcStatusSelect<ExtArgs> | null
    /**
     * Filter, which VcStatus to fetch.
     */
    where: VcStatusWhereUniqueInput
  }

  /**
   * VcStatus findFirst
   */
  export type VcStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcStatus
     */
    select?: VcStatusSelect<ExtArgs> | null
    /**
     * Filter, which VcStatus to fetch.
     */
    where?: VcStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VcStatuses to fetch.
     */
    orderBy?: VcStatusOrderByWithRelationInput | VcStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VcStatuses.
     */
    cursor?: VcStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VcStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VcStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VcStatuses.
     */
    distinct?: VcStatusScalarFieldEnum | VcStatusScalarFieldEnum[]
  }

  /**
   * VcStatus findFirstOrThrow
   */
  export type VcStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcStatus
     */
    select?: VcStatusSelect<ExtArgs> | null
    /**
     * Filter, which VcStatus to fetch.
     */
    where?: VcStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VcStatuses to fetch.
     */
    orderBy?: VcStatusOrderByWithRelationInput | VcStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VcStatuses.
     */
    cursor?: VcStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VcStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VcStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VcStatuses.
     */
    distinct?: VcStatusScalarFieldEnum | VcStatusScalarFieldEnum[]
  }

  /**
   * VcStatus findMany
   */
  export type VcStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcStatus
     */
    select?: VcStatusSelect<ExtArgs> | null
    /**
     * Filter, which VcStatuses to fetch.
     */
    where?: VcStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VcStatuses to fetch.
     */
    orderBy?: VcStatusOrderByWithRelationInput | VcStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VcStatuses.
     */
    cursor?: VcStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VcStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VcStatuses.
     */
    skip?: number
    distinct?: VcStatusScalarFieldEnum | VcStatusScalarFieldEnum[]
  }

  /**
   * VcStatus create
   */
  export type VcStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcStatus
     */
    select?: VcStatusSelect<ExtArgs> | null
    /**
     * The data needed to create a VcStatus.
     */
    data: XOR<VcStatusCreateInput, VcStatusUncheckedCreateInput>
  }

  /**
   * VcStatus createMany
   */
  export type VcStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VcStatuses.
     */
    data: VcStatusCreateManyInput | VcStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VcStatus createManyAndReturn
   */
  export type VcStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcStatus
     */
    select?: VcStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VcStatuses.
     */
    data: VcStatusCreateManyInput | VcStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VcStatus update
   */
  export type VcStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcStatus
     */
    select?: VcStatusSelect<ExtArgs> | null
    /**
     * The data needed to update a VcStatus.
     */
    data: XOR<VcStatusUpdateInput, VcStatusUncheckedUpdateInput>
    /**
     * Choose, which VcStatus to update.
     */
    where: VcStatusWhereUniqueInput
  }

  /**
   * VcStatus updateMany
   */
  export type VcStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VcStatuses.
     */
    data: XOR<VcStatusUpdateManyMutationInput, VcStatusUncheckedUpdateManyInput>
    /**
     * Filter which VcStatuses to update
     */
    where?: VcStatusWhereInput
  }

  /**
   * VcStatus upsert
   */
  export type VcStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcStatus
     */
    select?: VcStatusSelect<ExtArgs> | null
    /**
     * The filter to search for the VcStatus to update in case it exists.
     */
    where: VcStatusWhereUniqueInput
    /**
     * In case the VcStatus found by the `where` argument doesn't exist, create a new VcStatus with this data.
     */
    create: XOR<VcStatusCreateInput, VcStatusUncheckedCreateInput>
    /**
     * In case the VcStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VcStatusUpdateInput, VcStatusUncheckedUpdateInput>
  }

  /**
   * VcStatus delete
   */
  export type VcStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcStatus
     */
    select?: VcStatusSelect<ExtArgs> | null
    /**
     * Filter which VcStatus to delete.
     */
    where: VcStatusWhereUniqueInput
  }

  /**
   * VcStatus deleteMany
   */
  export type VcStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VcStatuses to delete
     */
    where?: VcStatusWhereInput
  }

  /**
   * VcStatus without action
   */
  export type VcStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VcStatus
     */
    select?: VcStatusSelect<ExtArgs> | null
  }


  /**
   * Model Suggestion
   */

  export type AggregateSuggestion = {
    _count: SuggestionCountAggregateOutputType | null
    _min: SuggestionMinAggregateOutputType | null
    _max: SuggestionMaxAggregateOutputType | null
  }

  export type SuggestionMinAggregateOutputType = {
    id: string | null
    controlId: string | null
    projectId: string | null
    type: $Enums.SuggestionType | null
    diff: string | null
    targetPath: string | null
    confidence: $Enums.Confidence | null
    status: $Enums.SuggestionStatus | null
    appliedAt: Date | null
    rejectedAt: Date | null
    createdAt: Date | null
  }

  export type SuggestionMaxAggregateOutputType = {
    id: string | null
    controlId: string | null
    projectId: string | null
    type: $Enums.SuggestionType | null
    diff: string | null
    targetPath: string | null
    confidence: $Enums.Confidence | null
    status: $Enums.SuggestionStatus | null
    appliedAt: Date | null
    rejectedAt: Date | null
    createdAt: Date | null
  }

  export type SuggestionCountAggregateOutputType = {
    id: number
    controlId: number
    projectId: number
    type: number
    diff: number
    targetPath: number
    confidence: number
    status: number
    appliedAt: number
    rejectedAt: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type SuggestionMinAggregateInputType = {
    id?: true
    controlId?: true
    projectId?: true
    type?: true
    diff?: true
    targetPath?: true
    confidence?: true
    status?: true
    appliedAt?: true
    rejectedAt?: true
    createdAt?: true
  }

  export type SuggestionMaxAggregateInputType = {
    id?: true
    controlId?: true
    projectId?: true
    type?: true
    diff?: true
    targetPath?: true
    confidence?: true
    status?: true
    appliedAt?: true
    rejectedAt?: true
    createdAt?: true
  }

  export type SuggestionCountAggregateInputType = {
    id?: true
    controlId?: true
    projectId?: true
    type?: true
    diff?: true
    targetPath?: true
    confidence?: true
    status?: true
    appliedAt?: true
    rejectedAt?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type SuggestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suggestion to aggregate.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suggestions
    **/
    _count?: true | SuggestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuggestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuggestionMaxAggregateInputType
  }

  export type GetSuggestionAggregateType<T extends SuggestionAggregateArgs> = {
        [P in keyof T & keyof AggregateSuggestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuggestion[P]>
      : GetScalarType<T[P], AggregateSuggestion[P]>
  }




  export type SuggestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuggestionWhereInput
    orderBy?: SuggestionOrderByWithAggregationInput | SuggestionOrderByWithAggregationInput[]
    by: SuggestionScalarFieldEnum[] | SuggestionScalarFieldEnum
    having?: SuggestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuggestionCountAggregateInputType | true
    _min?: SuggestionMinAggregateInputType
    _max?: SuggestionMaxAggregateInputType
  }

  export type SuggestionGroupByOutputType = {
    id: string
    controlId: string
    projectId: string
    type: $Enums.SuggestionType
    diff: string
    targetPath: string
    confidence: $Enums.Confidence
    status: $Enums.SuggestionStatus
    appliedAt: Date | null
    rejectedAt: Date | null
    metadata: JsonValue | null
    createdAt: Date
    _count: SuggestionCountAggregateOutputType | null
    _min: SuggestionMinAggregateOutputType | null
    _max: SuggestionMaxAggregateOutputType | null
  }

  type GetSuggestionGroupByPayload<T extends SuggestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuggestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuggestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuggestionGroupByOutputType[P]>
            : GetScalarType<T[P], SuggestionGroupByOutputType[P]>
        }
      >
    >


  export type SuggestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    controlId?: boolean
    projectId?: boolean
    type?: boolean
    diff?: boolean
    targetPath?: boolean
    confidence?: boolean
    status?: boolean
    appliedAt?: boolean
    rejectedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    control?: boolean | ControlDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestion"]>

  export type SuggestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    controlId?: boolean
    projectId?: boolean
    type?: boolean
    diff?: boolean
    targetPath?: boolean
    confidence?: boolean
    status?: boolean
    appliedAt?: boolean
    rejectedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    control?: boolean | ControlDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suggestion"]>

  export type SuggestionSelectScalar = {
    id?: boolean
    controlId?: boolean
    projectId?: boolean
    type?: boolean
    diff?: boolean
    targetPath?: boolean
    confidence?: boolean
    status?: boolean
    appliedAt?: boolean
    rejectedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type SuggestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    control?: boolean | ControlDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type SuggestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    control?: boolean | ControlDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $SuggestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Suggestion"
    objects: {
      control: Prisma.$ControlPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      controlId: string
      projectId: string
      type: $Enums.SuggestionType
      diff: string
      targetPath: string
      confidence: $Enums.Confidence
      status: $Enums.SuggestionStatus
      appliedAt: Date | null
      rejectedAt: Date | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["suggestion"]>
    composites: {}
  }

  type SuggestionGetPayload<S extends boolean | null | undefined | SuggestionDefaultArgs> = $Result.GetResult<Prisma.$SuggestionPayload, S>

  type SuggestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SuggestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SuggestionCountAggregateInputType | true
    }

  export interface SuggestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Suggestion'], meta: { name: 'Suggestion' } }
    /**
     * Find zero or one Suggestion that matches the filter.
     * @param {SuggestionFindUniqueArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuggestionFindUniqueArgs>(args: SelectSubset<T, SuggestionFindUniqueArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Suggestion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SuggestionFindUniqueOrThrowArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuggestionFindUniqueOrThrowArgs>(args: SelectSubset<T, SuggestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Suggestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionFindFirstArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuggestionFindFirstArgs>(args?: SelectSubset<T, SuggestionFindFirstArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Suggestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionFindFirstOrThrowArgs} args - Arguments to find a Suggestion
     * @example
     * // Get one Suggestion
     * const suggestion = await prisma.suggestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuggestionFindFirstOrThrowArgs>(args?: SelectSubset<T, SuggestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Suggestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suggestions
     * const suggestions = await prisma.suggestion.findMany()
     * 
     * // Get first 10 Suggestions
     * const suggestions = await prisma.suggestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suggestionWithIdOnly = await prisma.suggestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuggestionFindManyArgs>(args?: SelectSubset<T, SuggestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Suggestion.
     * @param {SuggestionCreateArgs} args - Arguments to create a Suggestion.
     * @example
     * // Create one Suggestion
     * const Suggestion = await prisma.suggestion.create({
     *   data: {
     *     // ... data to create a Suggestion
     *   }
     * })
     * 
     */
    create<T extends SuggestionCreateArgs>(args: SelectSubset<T, SuggestionCreateArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Suggestions.
     * @param {SuggestionCreateManyArgs} args - Arguments to create many Suggestions.
     * @example
     * // Create many Suggestions
     * const suggestion = await prisma.suggestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuggestionCreateManyArgs>(args?: SelectSubset<T, SuggestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suggestions and returns the data saved in the database.
     * @param {SuggestionCreateManyAndReturnArgs} args - Arguments to create many Suggestions.
     * @example
     * // Create many Suggestions
     * const suggestion = await prisma.suggestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suggestions and only return the `id`
     * const suggestionWithIdOnly = await prisma.suggestion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuggestionCreateManyAndReturnArgs>(args?: SelectSubset<T, SuggestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Suggestion.
     * @param {SuggestionDeleteArgs} args - Arguments to delete one Suggestion.
     * @example
     * // Delete one Suggestion
     * const Suggestion = await prisma.suggestion.delete({
     *   where: {
     *     // ... filter to delete one Suggestion
     *   }
     * })
     * 
     */
    delete<T extends SuggestionDeleteArgs>(args: SelectSubset<T, SuggestionDeleteArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Suggestion.
     * @param {SuggestionUpdateArgs} args - Arguments to update one Suggestion.
     * @example
     * // Update one Suggestion
     * const suggestion = await prisma.suggestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuggestionUpdateArgs>(args: SelectSubset<T, SuggestionUpdateArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Suggestions.
     * @param {SuggestionDeleteManyArgs} args - Arguments to filter Suggestions to delete.
     * @example
     * // Delete a few Suggestions
     * const { count } = await prisma.suggestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuggestionDeleteManyArgs>(args?: SelectSubset<T, SuggestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suggestions
     * const suggestion = await prisma.suggestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuggestionUpdateManyArgs>(args: SelectSubset<T, SuggestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Suggestion.
     * @param {SuggestionUpsertArgs} args - Arguments to update or create a Suggestion.
     * @example
     * // Update or create a Suggestion
     * const suggestion = await prisma.suggestion.upsert({
     *   create: {
     *     // ... data to create a Suggestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suggestion we want to update
     *   }
     * })
     */
    upsert<T extends SuggestionUpsertArgs>(args: SelectSubset<T, SuggestionUpsertArgs<ExtArgs>>): Prisma__SuggestionClient<$Result.GetResult<Prisma.$SuggestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Suggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionCountArgs} args - Arguments to filter Suggestions to count.
     * @example
     * // Count the number of Suggestions
     * const count = await prisma.suggestion.count({
     *   where: {
     *     // ... the filter for the Suggestions we want to count
     *   }
     * })
    **/
    count<T extends SuggestionCountArgs>(
      args?: Subset<T, SuggestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuggestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuggestionAggregateArgs>(args: Subset<T, SuggestionAggregateArgs>): Prisma.PrismaPromise<GetSuggestionAggregateType<T>>

    /**
     * Group by Suggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuggestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SuggestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuggestionGroupByArgs['orderBy'] }
        : { orderBy?: SuggestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SuggestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuggestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Suggestion model
   */
  readonly fields: SuggestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Suggestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuggestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    control<T extends ControlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ControlDefaultArgs<ExtArgs>>): Prisma__ControlClient<$Result.GetResult<Prisma.$ControlPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Suggestion model
   */ 
  interface SuggestionFieldRefs {
    readonly id: FieldRef<"Suggestion", 'String'>
    readonly controlId: FieldRef<"Suggestion", 'String'>
    readonly projectId: FieldRef<"Suggestion", 'String'>
    readonly type: FieldRef<"Suggestion", 'SuggestionType'>
    readonly diff: FieldRef<"Suggestion", 'String'>
    readonly targetPath: FieldRef<"Suggestion", 'String'>
    readonly confidence: FieldRef<"Suggestion", 'Confidence'>
    readonly status: FieldRef<"Suggestion", 'SuggestionStatus'>
    readonly appliedAt: FieldRef<"Suggestion", 'DateTime'>
    readonly rejectedAt: FieldRef<"Suggestion", 'DateTime'>
    readonly metadata: FieldRef<"Suggestion", 'Json'>
    readonly createdAt: FieldRef<"Suggestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Suggestion findUnique
   */
  export type SuggestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion findUniqueOrThrow
   */
  export type SuggestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion findFirst
   */
  export type SuggestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suggestions.
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suggestions.
     */
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Suggestion findFirstOrThrow
   */
  export type SuggestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestion to fetch.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suggestions.
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suggestions.
     */
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Suggestion findMany
   */
  export type SuggestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter, which Suggestions to fetch.
     */
    where?: SuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suggestions to fetch.
     */
    orderBy?: SuggestionOrderByWithRelationInput | SuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suggestions.
     */
    cursor?: SuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suggestions.
     */
    skip?: number
    distinct?: SuggestionScalarFieldEnum | SuggestionScalarFieldEnum[]
  }

  /**
   * Suggestion create
   */
  export type SuggestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Suggestion.
     */
    data: XOR<SuggestionCreateInput, SuggestionUncheckedCreateInput>
  }

  /**
   * Suggestion createMany
   */
  export type SuggestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suggestions.
     */
    data: SuggestionCreateManyInput | SuggestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Suggestion createManyAndReturn
   */
  export type SuggestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Suggestions.
     */
    data: SuggestionCreateManyInput | SuggestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Suggestion update
   */
  export type SuggestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Suggestion.
     */
    data: XOR<SuggestionUpdateInput, SuggestionUncheckedUpdateInput>
    /**
     * Choose, which Suggestion to update.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion updateMany
   */
  export type SuggestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suggestions.
     */
    data: XOR<SuggestionUpdateManyMutationInput, SuggestionUncheckedUpdateManyInput>
    /**
     * Filter which Suggestions to update
     */
    where?: SuggestionWhereInput
  }

  /**
   * Suggestion upsert
   */
  export type SuggestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Suggestion to update in case it exists.
     */
    where: SuggestionWhereUniqueInput
    /**
     * In case the Suggestion found by the `where` argument doesn't exist, create a new Suggestion with this data.
     */
    create: XOR<SuggestionCreateInput, SuggestionUncheckedCreateInput>
    /**
     * In case the Suggestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuggestionUpdateInput, SuggestionUncheckedUpdateInput>
  }

  /**
   * Suggestion delete
   */
  export type SuggestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
    /**
     * Filter which Suggestion to delete.
     */
    where: SuggestionWhereUniqueInput
  }

  /**
   * Suggestion deleteMany
   */
  export type SuggestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suggestions to delete
     */
    where?: SuggestionWhereInput
  }

  /**
   * Suggestion without action
   */
  export type SuggestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suggestion
     */
    select?: SuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuggestionInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    action: string | null
    resourceType: string | null
    resourceId: string | null
    ipAddress: string | null
    userAgent: string | null
    timestamp: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    action: string | null
    resourceType: string | null
    resourceId: string | null
    ipAddress: string | null
    userAgent: string | null
    timestamp: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    tenantId: number
    userId: number
    action: number
    resourceType: number
    resourceId: number
    before: number
    after: number
    metadata: number
    ipAddress: number
    userAgent: number
    timestamp: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    action?: true
    resourceType?: true
    resourceId?: true
    ipAddress?: true
    userAgent?: true
    timestamp?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    action?: true
    resourceType?: true
    resourceId?: true
    ipAddress?: true
    userAgent?: true
    timestamp?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    action?: true
    resourceType?: true
    resourceId?: true
    before?: true
    after?: true
    metadata?: true
    ipAddress?: true
    userAgent?: true
    timestamp?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    tenantId: string
    userId: string | null
    action: string
    resourceType: string
    resourceId: string | null
    before: JsonValue | null
    after: JsonValue | null
    metadata: JsonValue | null
    ipAddress: string | null
    userAgent: string | null
    timestamp: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    before?: boolean
    after?: boolean
    metadata?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    before?: boolean
    after?: boolean
    metadata?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    before?: boolean
    after?: boolean
    metadata?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    timestamp?: boolean
  }


  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      userId: string | null
      action: string
      resourceType: string
      resourceId: string | null
      before: Prisma.JsonValue | null
      after: Prisma.JsonValue | null
      metadata: Prisma.JsonValue | null
      ipAddress: string | null
      userAgent: string | null
      timestamp: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly tenantId: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly resourceType: FieldRef<"AuditLog", 'String'>
    readonly resourceId: FieldRef<"AuditLog", 'String'>
    readonly before: FieldRef<"AuditLog", 'Json'>
    readonly after: FieldRef<"AuditLog", 'Json'>
    readonly metadata: FieldRef<"AuditLog", 'Json'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly userAgent: FieldRef<"AuditLog", 'String'>
    readonly timestamp: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    tier: 'tier',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    email: 'email',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    slug: 'slug',
    environment: 'environment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const FrameworkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    catalogUrl: 'catalogUrl',
    version: 'version',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FrameworkScalarFieldEnum = (typeof FrameworkScalarFieldEnum)[keyof typeof FrameworkScalarFieldEnum]


  export const ControlScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    frameworkId: 'frameworkId',
    controlId: 'controlId',
    title: 'title',
    description: 'description',
    parameters: 'parameters',
    criticality: 'criticality',
    parentControlId: 'parentControlId',
    currentStatus: 'currentStatus',
    lastEvaluatedAt: 'lastEvaluatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ControlScalarFieldEnum = (typeof ControlScalarFieldEnum)[keyof typeof ControlScalarFieldEnum]


  export const ControlEvaluationScalarFieldEnum: {
    id: 'id',
    controlId: 'controlId',
    projectId: 'projectId',
    runId: 'runId',
    status: 'status',
    rationale: 'rationale',
    evidenceRefs: 'evidenceRefs',
    factsHash: 'factsHash',
    rulesetHash: 'rulesetHash',
    rulesetVersion: 'rulesetVersion',
    nlpScore: 'nlpScore',
    riskScore: 'riskScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ControlEvaluationScalarFieldEnum = (typeof ControlEvaluationScalarFieldEnum)[keyof typeof ControlEvaluationScalarFieldEnum]


  export const EvaluationRunScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    trigger: 'trigger',
    triggeredBy: 'triggeredBy',
    totalControls: 'totalControls',
    passed: 'passed',
    failed: 'failed',
    manual: 'manual',
    notApplicable: 'notApplicable',
    startedAt: 'startedAt',
    completedAt: 'completedAt'
  };

  export type EvaluationRunScalarFieldEnum = (typeof EvaluationRunScalarFieldEnum)[keyof typeof EvaluationRunScalarFieldEnum]


  export const FactScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    key: 'key',
    value: 'value',
    source: 'source',
    sourceId: 'sourceId',
    metadata: 'metadata',
    collectedAt: 'collectedAt',
    expiresAt: 'expiresAt'
  };

  export type FactScalarFieldEnum = (typeof FactScalarFieldEnum)[keyof typeof FactScalarFieldEnum]


  export const PolicySegmentScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    path: 'path',
    lineNumber: 'lineNumber',
    text: 'text',
    embedding: 'embedding',
    version: 'version',
    baselineHash: 'baselineHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PolicySegmentScalarFieldEnum = (typeof PolicySegmentScalarFieldEnum)[keyof typeof PolicySegmentScalarFieldEnum]


  export const VcStatusScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    subjectDid: 'subjectDid',
    vcId: 'vcId',
    vcType: 'vcType',
    state: 'state',
    notBefore: 'notBefore',
    notAfter: 'notAfter',
    issuerDid: 'issuerDid',
    lastChecked: 'lastChecked'
  };

  export type VcStatusScalarFieldEnum = (typeof VcStatusScalarFieldEnum)[keyof typeof VcStatusScalarFieldEnum]


  export const SuggestionScalarFieldEnum: {
    id: 'id',
    controlId: 'controlId',
    projectId: 'projectId',
    type: 'type',
    diff: 'diff',
    targetPath: 'targetPath',
    confidence: 'confidence',
    status: 'status',
    appliedAt: 'appliedAt',
    rejectedAt: 'rejectedAt',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type SuggestionScalarFieldEnum = (typeof SuggestionScalarFieldEnum)[keyof typeof SuggestionScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    userId: 'userId',
    action: 'action',
    resourceType: 'resourceType',
    resourceId: 'resourceId',
    before: 'before',
    after: 'after',
    metadata: 'metadata',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    timestamp: 'timestamp'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TierType'
   */
  export type EnumTierTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TierType'>
    


  /**
   * Reference to a field of type 'TierType[]'
   */
  export type ListEnumTierTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TierType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Criticality'
   */
  export type EnumCriticalityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Criticality'>
    


  /**
   * Reference to a field of type 'Criticality[]'
   */
  export type ListEnumCriticalityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Criticality[]'>
    


  /**
   * Reference to a field of type 'ControlStatus'
   */
  export type EnumControlStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ControlStatus'>
    


  /**
   * Reference to a field of type 'ControlStatus[]'
   */
  export type ListEnumControlStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ControlStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'VcState'
   */
  export type EnumVcStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VcState'>
    


  /**
   * Reference to a field of type 'VcState[]'
   */
  export type ListEnumVcStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VcState[]'>
    


  /**
   * Reference to a field of type 'SuggestionType'
   */
  export type EnumSuggestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SuggestionType'>
    


  /**
   * Reference to a field of type 'SuggestionType[]'
   */
  export type ListEnumSuggestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SuggestionType[]'>
    


  /**
   * Reference to a field of type 'Confidence'
   */
  export type EnumConfidenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Confidence'>
    


  /**
   * Reference to a field of type 'Confidence[]'
   */
  export type ListEnumConfidenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Confidence[]'>
    


  /**
   * Reference to a field of type 'SuggestionStatus'
   */
  export type EnumSuggestionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SuggestionStatus'>
    


  /**
   * Reference to a field of type 'SuggestionStatus[]'
   */
  export type ListEnumSuggestionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SuggestionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    slug?: StringFilter<"Tenant"> | string
    tier?: EnumTierTypeFilter<"Tenant"> | $Enums.TierType
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    projects?: ProjectListRelationFilter
    users?: UserListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    tier?: EnumTierTypeFilter<"Tenant"> | $Enums.TierType
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    projects?: ProjectListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "slug">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    slug?: StringWithAggregatesFilter<"Tenant"> | string
    tier?: EnumTierTypeWithAggregatesFilter<"Tenant"> | $Enums.TierType
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    tenantId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    tenantId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    tenantId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    environment?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    controls?: ControlListRelationFilter
    facts?: FactListRelationFilter
    suggestions?: SuggestionListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    environment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    controls?: ControlOrderByRelationAggregateInput
    facts?: FactOrderByRelationAggregateInput
    suggestions?: SuggestionOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_slug?: ProjectTenantIdSlugCompoundUniqueInput
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    tenantId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    environment?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    controls?: ControlListRelationFilter
    facts?: FactListRelationFilter
    suggestions?: SuggestionListRelationFilter
  }, "id" | "tenantId_slug">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    environment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    tenantId?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    slug?: StringWithAggregatesFilter<"Project"> | string
    environment?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type FrameworkWhereInput = {
    AND?: FrameworkWhereInput | FrameworkWhereInput[]
    OR?: FrameworkWhereInput[]
    NOT?: FrameworkWhereInput | FrameworkWhereInput[]
    id?: StringFilter<"Framework"> | string
    name?: StringFilter<"Framework"> | string
    slug?: StringFilter<"Framework"> | string
    catalogUrl?: StringNullableFilter<"Framework"> | string | null
    version?: StringFilter<"Framework"> | string
    isActive?: BoolFilter<"Framework"> | boolean
    createdAt?: DateTimeFilter<"Framework"> | Date | string
    updatedAt?: DateTimeFilter<"Framework"> | Date | string
    controls?: ControlListRelationFilter
  }

  export type FrameworkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    catalogUrl?: SortOrderInput | SortOrder
    version?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    controls?: ControlOrderByRelationAggregateInput
  }

  export type FrameworkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: FrameworkWhereInput | FrameworkWhereInput[]
    OR?: FrameworkWhereInput[]
    NOT?: FrameworkWhereInput | FrameworkWhereInput[]
    name?: StringFilter<"Framework"> | string
    catalogUrl?: StringNullableFilter<"Framework"> | string | null
    version?: StringFilter<"Framework"> | string
    isActive?: BoolFilter<"Framework"> | boolean
    createdAt?: DateTimeFilter<"Framework"> | Date | string
    updatedAt?: DateTimeFilter<"Framework"> | Date | string
    controls?: ControlListRelationFilter
  }, "id" | "slug">

  export type FrameworkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    catalogUrl?: SortOrderInput | SortOrder
    version?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FrameworkCountOrderByAggregateInput
    _max?: FrameworkMaxOrderByAggregateInput
    _min?: FrameworkMinOrderByAggregateInput
  }

  export type FrameworkScalarWhereWithAggregatesInput = {
    AND?: FrameworkScalarWhereWithAggregatesInput | FrameworkScalarWhereWithAggregatesInput[]
    OR?: FrameworkScalarWhereWithAggregatesInput[]
    NOT?: FrameworkScalarWhereWithAggregatesInput | FrameworkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Framework"> | string
    name?: StringWithAggregatesFilter<"Framework"> | string
    slug?: StringWithAggregatesFilter<"Framework"> | string
    catalogUrl?: StringNullableWithAggregatesFilter<"Framework"> | string | null
    version?: StringWithAggregatesFilter<"Framework"> | string
    isActive?: BoolWithAggregatesFilter<"Framework"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Framework"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Framework"> | Date | string
  }

  export type ControlWhereInput = {
    AND?: ControlWhereInput | ControlWhereInput[]
    OR?: ControlWhereInput[]
    NOT?: ControlWhereInput | ControlWhereInput[]
    id?: StringFilter<"Control"> | string
    projectId?: StringFilter<"Control"> | string
    frameworkId?: StringFilter<"Control"> | string
    controlId?: StringFilter<"Control"> | string
    title?: StringFilter<"Control"> | string
    description?: StringFilter<"Control"> | string
    parameters?: JsonFilter<"Control">
    criticality?: EnumCriticalityFilter<"Control"> | $Enums.Criticality
    parentControlId?: StringNullableFilter<"Control"> | string | null
    currentStatus?: EnumControlStatusFilter<"Control"> | $Enums.ControlStatus
    lastEvaluatedAt?: DateTimeNullableFilter<"Control"> | Date | string | null
    createdAt?: DateTimeFilter<"Control"> | Date | string
    updatedAt?: DateTimeFilter<"Control"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    framework?: XOR<FrameworkRelationFilter, FrameworkWhereInput>
    parentControl?: XOR<ControlNullableRelationFilter, ControlWhereInput> | null
    childControls?: ControlListRelationFilter
    evaluations?: ControlEvaluationListRelationFilter
    suggestions?: SuggestionListRelationFilter
  }

  export type ControlOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    frameworkId?: SortOrder
    controlId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    parameters?: SortOrder
    criticality?: SortOrder
    parentControlId?: SortOrderInput | SortOrder
    currentStatus?: SortOrder
    lastEvaluatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    framework?: FrameworkOrderByWithRelationInput
    parentControl?: ControlOrderByWithRelationInput
    childControls?: ControlOrderByRelationAggregateInput
    evaluations?: ControlEvaluationOrderByRelationAggregateInput
    suggestions?: SuggestionOrderByRelationAggregateInput
  }

  export type ControlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_frameworkId_controlId?: ControlProjectIdFrameworkIdControlIdCompoundUniqueInput
    AND?: ControlWhereInput | ControlWhereInput[]
    OR?: ControlWhereInput[]
    NOT?: ControlWhereInput | ControlWhereInput[]
    projectId?: StringFilter<"Control"> | string
    frameworkId?: StringFilter<"Control"> | string
    controlId?: StringFilter<"Control"> | string
    title?: StringFilter<"Control"> | string
    description?: StringFilter<"Control"> | string
    parameters?: JsonFilter<"Control">
    criticality?: EnumCriticalityFilter<"Control"> | $Enums.Criticality
    parentControlId?: StringNullableFilter<"Control"> | string | null
    currentStatus?: EnumControlStatusFilter<"Control"> | $Enums.ControlStatus
    lastEvaluatedAt?: DateTimeNullableFilter<"Control"> | Date | string | null
    createdAt?: DateTimeFilter<"Control"> | Date | string
    updatedAt?: DateTimeFilter<"Control"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    framework?: XOR<FrameworkRelationFilter, FrameworkWhereInput>
    parentControl?: XOR<ControlNullableRelationFilter, ControlWhereInput> | null
    childControls?: ControlListRelationFilter
    evaluations?: ControlEvaluationListRelationFilter
    suggestions?: SuggestionListRelationFilter
  }, "id" | "projectId_frameworkId_controlId">

  export type ControlOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    frameworkId?: SortOrder
    controlId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    parameters?: SortOrder
    criticality?: SortOrder
    parentControlId?: SortOrderInput | SortOrder
    currentStatus?: SortOrder
    lastEvaluatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ControlCountOrderByAggregateInput
    _max?: ControlMaxOrderByAggregateInput
    _min?: ControlMinOrderByAggregateInput
  }

  export type ControlScalarWhereWithAggregatesInput = {
    AND?: ControlScalarWhereWithAggregatesInput | ControlScalarWhereWithAggregatesInput[]
    OR?: ControlScalarWhereWithAggregatesInput[]
    NOT?: ControlScalarWhereWithAggregatesInput | ControlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Control"> | string
    projectId?: StringWithAggregatesFilter<"Control"> | string
    frameworkId?: StringWithAggregatesFilter<"Control"> | string
    controlId?: StringWithAggregatesFilter<"Control"> | string
    title?: StringWithAggregatesFilter<"Control"> | string
    description?: StringWithAggregatesFilter<"Control"> | string
    parameters?: JsonWithAggregatesFilter<"Control">
    criticality?: EnumCriticalityWithAggregatesFilter<"Control"> | $Enums.Criticality
    parentControlId?: StringNullableWithAggregatesFilter<"Control"> | string | null
    currentStatus?: EnumControlStatusWithAggregatesFilter<"Control"> | $Enums.ControlStatus
    lastEvaluatedAt?: DateTimeNullableWithAggregatesFilter<"Control"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Control"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Control"> | Date | string
  }

  export type ControlEvaluationWhereInput = {
    AND?: ControlEvaluationWhereInput | ControlEvaluationWhereInput[]
    OR?: ControlEvaluationWhereInput[]
    NOT?: ControlEvaluationWhereInput | ControlEvaluationWhereInput[]
    id?: StringFilter<"ControlEvaluation"> | string
    controlId?: StringFilter<"ControlEvaluation"> | string
    projectId?: StringFilter<"ControlEvaluation"> | string
    runId?: StringFilter<"ControlEvaluation"> | string
    status?: EnumControlStatusFilter<"ControlEvaluation"> | $Enums.ControlStatus
    rationale?: StringFilter<"ControlEvaluation"> | string
    evidenceRefs?: JsonFilter<"ControlEvaluation">
    factsHash?: StringFilter<"ControlEvaluation"> | string
    rulesetHash?: StringFilter<"ControlEvaluation"> | string
    rulesetVersion?: StringFilter<"ControlEvaluation"> | string
    nlpScore?: FloatNullableFilter<"ControlEvaluation"> | number | null
    riskScore?: FloatNullableFilter<"ControlEvaluation"> | number | null
    createdAt?: DateTimeFilter<"ControlEvaluation"> | Date | string
    updatedAt?: DateTimeFilter<"ControlEvaluation"> | Date | string
    control?: XOR<ControlRelationFilter, ControlWhereInput>
  }

  export type ControlEvaluationOrderByWithRelationInput = {
    id?: SortOrder
    controlId?: SortOrder
    projectId?: SortOrder
    runId?: SortOrder
    status?: SortOrder
    rationale?: SortOrder
    evidenceRefs?: SortOrder
    factsHash?: SortOrder
    rulesetHash?: SortOrder
    rulesetVersion?: SortOrder
    nlpScore?: SortOrderInput | SortOrder
    riskScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    control?: ControlOrderByWithRelationInput
  }

  export type ControlEvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ControlEvaluationWhereInput | ControlEvaluationWhereInput[]
    OR?: ControlEvaluationWhereInput[]
    NOT?: ControlEvaluationWhereInput | ControlEvaluationWhereInput[]
    controlId?: StringFilter<"ControlEvaluation"> | string
    projectId?: StringFilter<"ControlEvaluation"> | string
    runId?: StringFilter<"ControlEvaluation"> | string
    status?: EnumControlStatusFilter<"ControlEvaluation"> | $Enums.ControlStatus
    rationale?: StringFilter<"ControlEvaluation"> | string
    evidenceRefs?: JsonFilter<"ControlEvaluation">
    factsHash?: StringFilter<"ControlEvaluation"> | string
    rulesetHash?: StringFilter<"ControlEvaluation"> | string
    rulesetVersion?: StringFilter<"ControlEvaluation"> | string
    nlpScore?: FloatNullableFilter<"ControlEvaluation"> | number | null
    riskScore?: FloatNullableFilter<"ControlEvaluation"> | number | null
    createdAt?: DateTimeFilter<"ControlEvaluation"> | Date | string
    updatedAt?: DateTimeFilter<"ControlEvaluation"> | Date | string
    control?: XOR<ControlRelationFilter, ControlWhereInput>
  }, "id">

  export type ControlEvaluationOrderByWithAggregationInput = {
    id?: SortOrder
    controlId?: SortOrder
    projectId?: SortOrder
    runId?: SortOrder
    status?: SortOrder
    rationale?: SortOrder
    evidenceRefs?: SortOrder
    factsHash?: SortOrder
    rulesetHash?: SortOrder
    rulesetVersion?: SortOrder
    nlpScore?: SortOrderInput | SortOrder
    riskScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ControlEvaluationCountOrderByAggregateInput
    _avg?: ControlEvaluationAvgOrderByAggregateInput
    _max?: ControlEvaluationMaxOrderByAggregateInput
    _min?: ControlEvaluationMinOrderByAggregateInput
    _sum?: ControlEvaluationSumOrderByAggregateInput
  }

  export type ControlEvaluationScalarWhereWithAggregatesInput = {
    AND?: ControlEvaluationScalarWhereWithAggregatesInput | ControlEvaluationScalarWhereWithAggregatesInput[]
    OR?: ControlEvaluationScalarWhereWithAggregatesInput[]
    NOT?: ControlEvaluationScalarWhereWithAggregatesInput | ControlEvaluationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ControlEvaluation"> | string
    controlId?: StringWithAggregatesFilter<"ControlEvaluation"> | string
    projectId?: StringWithAggregatesFilter<"ControlEvaluation"> | string
    runId?: StringWithAggregatesFilter<"ControlEvaluation"> | string
    status?: EnumControlStatusWithAggregatesFilter<"ControlEvaluation"> | $Enums.ControlStatus
    rationale?: StringWithAggregatesFilter<"ControlEvaluation"> | string
    evidenceRefs?: JsonWithAggregatesFilter<"ControlEvaluation">
    factsHash?: StringWithAggregatesFilter<"ControlEvaluation"> | string
    rulesetHash?: StringWithAggregatesFilter<"ControlEvaluation"> | string
    rulesetVersion?: StringWithAggregatesFilter<"ControlEvaluation"> | string
    nlpScore?: FloatNullableWithAggregatesFilter<"ControlEvaluation"> | number | null
    riskScore?: FloatNullableWithAggregatesFilter<"ControlEvaluation"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ControlEvaluation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ControlEvaluation"> | Date | string
  }

  export type EvaluationRunWhereInput = {
    AND?: EvaluationRunWhereInput | EvaluationRunWhereInput[]
    OR?: EvaluationRunWhereInput[]
    NOT?: EvaluationRunWhereInput | EvaluationRunWhereInput[]
    id?: StringFilter<"EvaluationRun"> | string
    projectId?: StringFilter<"EvaluationRun"> | string
    trigger?: StringFilter<"EvaluationRun"> | string
    triggeredBy?: StringNullableFilter<"EvaluationRun"> | string | null
    totalControls?: IntFilter<"EvaluationRun"> | number
    passed?: IntFilter<"EvaluationRun"> | number
    failed?: IntFilter<"EvaluationRun"> | number
    manual?: IntFilter<"EvaluationRun"> | number
    notApplicable?: IntFilter<"EvaluationRun"> | number
    startedAt?: DateTimeFilter<"EvaluationRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"EvaluationRun"> | Date | string | null
  }

  export type EvaluationRunOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    trigger?: SortOrder
    triggeredBy?: SortOrderInput | SortOrder
    totalControls?: SortOrder
    passed?: SortOrder
    failed?: SortOrder
    manual?: SortOrder
    notApplicable?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
  }

  export type EvaluationRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EvaluationRunWhereInput | EvaluationRunWhereInput[]
    OR?: EvaluationRunWhereInput[]
    NOT?: EvaluationRunWhereInput | EvaluationRunWhereInput[]
    projectId?: StringFilter<"EvaluationRun"> | string
    trigger?: StringFilter<"EvaluationRun"> | string
    triggeredBy?: StringNullableFilter<"EvaluationRun"> | string | null
    totalControls?: IntFilter<"EvaluationRun"> | number
    passed?: IntFilter<"EvaluationRun"> | number
    failed?: IntFilter<"EvaluationRun"> | number
    manual?: IntFilter<"EvaluationRun"> | number
    notApplicable?: IntFilter<"EvaluationRun"> | number
    startedAt?: DateTimeFilter<"EvaluationRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"EvaluationRun"> | Date | string | null
  }, "id">

  export type EvaluationRunOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    trigger?: SortOrder
    triggeredBy?: SortOrderInput | SortOrder
    totalControls?: SortOrder
    passed?: SortOrder
    failed?: SortOrder
    manual?: SortOrder
    notApplicable?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: EvaluationRunCountOrderByAggregateInput
    _avg?: EvaluationRunAvgOrderByAggregateInput
    _max?: EvaluationRunMaxOrderByAggregateInput
    _min?: EvaluationRunMinOrderByAggregateInput
    _sum?: EvaluationRunSumOrderByAggregateInput
  }

  export type EvaluationRunScalarWhereWithAggregatesInput = {
    AND?: EvaluationRunScalarWhereWithAggregatesInput | EvaluationRunScalarWhereWithAggregatesInput[]
    OR?: EvaluationRunScalarWhereWithAggregatesInput[]
    NOT?: EvaluationRunScalarWhereWithAggregatesInput | EvaluationRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EvaluationRun"> | string
    projectId?: StringWithAggregatesFilter<"EvaluationRun"> | string
    trigger?: StringWithAggregatesFilter<"EvaluationRun"> | string
    triggeredBy?: StringNullableWithAggregatesFilter<"EvaluationRun"> | string | null
    totalControls?: IntWithAggregatesFilter<"EvaluationRun"> | number
    passed?: IntWithAggregatesFilter<"EvaluationRun"> | number
    failed?: IntWithAggregatesFilter<"EvaluationRun"> | number
    manual?: IntWithAggregatesFilter<"EvaluationRun"> | number
    notApplicable?: IntWithAggregatesFilter<"EvaluationRun"> | number
    startedAt?: DateTimeWithAggregatesFilter<"EvaluationRun"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"EvaluationRun"> | Date | string | null
  }

  export type FactWhereInput = {
    AND?: FactWhereInput | FactWhereInput[]
    OR?: FactWhereInput[]
    NOT?: FactWhereInput | FactWhereInput[]
    id?: StringFilter<"Fact"> | string
    projectId?: StringFilter<"Fact"> | string
    key?: StringFilter<"Fact"> | string
    value?: JsonFilter<"Fact">
    source?: StringFilter<"Fact"> | string
    sourceId?: StringNullableFilter<"Fact"> | string | null
    metadata?: JsonNullableFilter<"Fact">
    collectedAt?: DateTimeFilter<"Fact"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Fact"> | Date | string | null
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type FactOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    source?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    collectedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type FactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_key_source?: FactProjectIdKeySourceCompoundUniqueInput
    AND?: FactWhereInput | FactWhereInput[]
    OR?: FactWhereInput[]
    NOT?: FactWhereInput | FactWhereInput[]
    projectId?: StringFilter<"Fact"> | string
    key?: StringFilter<"Fact"> | string
    value?: JsonFilter<"Fact">
    source?: StringFilter<"Fact"> | string
    sourceId?: StringNullableFilter<"Fact"> | string | null
    metadata?: JsonNullableFilter<"Fact">
    collectedAt?: DateTimeFilter<"Fact"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Fact"> | Date | string | null
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id" | "projectId_key_source">

  export type FactOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    source?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    collectedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: FactCountOrderByAggregateInput
    _max?: FactMaxOrderByAggregateInput
    _min?: FactMinOrderByAggregateInput
  }

  export type FactScalarWhereWithAggregatesInput = {
    AND?: FactScalarWhereWithAggregatesInput | FactScalarWhereWithAggregatesInput[]
    OR?: FactScalarWhereWithAggregatesInput[]
    NOT?: FactScalarWhereWithAggregatesInput | FactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fact"> | string
    projectId?: StringWithAggregatesFilter<"Fact"> | string
    key?: StringWithAggregatesFilter<"Fact"> | string
    value?: JsonWithAggregatesFilter<"Fact">
    source?: StringWithAggregatesFilter<"Fact"> | string
    sourceId?: StringNullableWithAggregatesFilter<"Fact"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Fact">
    collectedAt?: DateTimeWithAggregatesFilter<"Fact"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Fact"> | Date | string | null
  }

  export type PolicySegmentWhereInput = {
    AND?: PolicySegmentWhereInput | PolicySegmentWhereInput[]
    OR?: PolicySegmentWhereInput[]
    NOT?: PolicySegmentWhereInput | PolicySegmentWhereInput[]
    id?: StringFilter<"PolicySegment"> | string
    projectId?: StringFilter<"PolicySegment"> | string
    path?: StringFilter<"PolicySegment"> | string
    lineNumber?: IntNullableFilter<"PolicySegment"> | number | null
    text?: StringFilter<"PolicySegment"> | string
    embedding?: FloatNullableListFilter<"PolicySegment">
    version?: StringFilter<"PolicySegment"> | string
    baselineHash?: StringFilter<"PolicySegment"> | string
    createdAt?: DateTimeFilter<"PolicySegment"> | Date | string
    updatedAt?: DateTimeFilter<"PolicySegment"> | Date | string
  }

  export type PolicySegmentOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    path?: SortOrder
    lineNumber?: SortOrderInput | SortOrder
    text?: SortOrder
    embedding?: SortOrder
    version?: SortOrder
    baselineHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicySegmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PolicySegmentWhereInput | PolicySegmentWhereInput[]
    OR?: PolicySegmentWhereInput[]
    NOT?: PolicySegmentWhereInput | PolicySegmentWhereInput[]
    projectId?: StringFilter<"PolicySegment"> | string
    path?: StringFilter<"PolicySegment"> | string
    lineNumber?: IntNullableFilter<"PolicySegment"> | number | null
    text?: StringFilter<"PolicySegment"> | string
    embedding?: FloatNullableListFilter<"PolicySegment">
    version?: StringFilter<"PolicySegment"> | string
    baselineHash?: StringFilter<"PolicySegment"> | string
    createdAt?: DateTimeFilter<"PolicySegment"> | Date | string
    updatedAt?: DateTimeFilter<"PolicySegment"> | Date | string
  }, "id">

  export type PolicySegmentOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    path?: SortOrder
    lineNumber?: SortOrderInput | SortOrder
    text?: SortOrder
    embedding?: SortOrder
    version?: SortOrder
    baselineHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PolicySegmentCountOrderByAggregateInput
    _avg?: PolicySegmentAvgOrderByAggregateInput
    _max?: PolicySegmentMaxOrderByAggregateInput
    _min?: PolicySegmentMinOrderByAggregateInput
    _sum?: PolicySegmentSumOrderByAggregateInput
  }

  export type PolicySegmentScalarWhereWithAggregatesInput = {
    AND?: PolicySegmentScalarWhereWithAggregatesInput | PolicySegmentScalarWhereWithAggregatesInput[]
    OR?: PolicySegmentScalarWhereWithAggregatesInput[]
    NOT?: PolicySegmentScalarWhereWithAggregatesInput | PolicySegmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PolicySegment"> | string
    projectId?: StringWithAggregatesFilter<"PolicySegment"> | string
    path?: StringWithAggregatesFilter<"PolicySegment"> | string
    lineNumber?: IntNullableWithAggregatesFilter<"PolicySegment"> | number | null
    text?: StringWithAggregatesFilter<"PolicySegment"> | string
    embedding?: FloatNullableListFilter<"PolicySegment">
    version?: StringWithAggregatesFilter<"PolicySegment"> | string
    baselineHash?: StringWithAggregatesFilter<"PolicySegment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PolicySegment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PolicySegment"> | Date | string
  }

  export type VcStatusWhereInput = {
    AND?: VcStatusWhereInput | VcStatusWhereInput[]
    OR?: VcStatusWhereInput[]
    NOT?: VcStatusWhereInput | VcStatusWhereInput[]
    id?: StringFilter<"VcStatus"> | string
    projectId?: StringFilter<"VcStatus"> | string
    subjectDid?: StringFilter<"VcStatus"> | string
    vcId?: StringFilter<"VcStatus"> | string
    vcType?: StringFilter<"VcStatus"> | string
    state?: EnumVcStateFilter<"VcStatus"> | $Enums.VcState
    notBefore?: DateTimeFilter<"VcStatus"> | Date | string
    notAfter?: DateTimeFilter<"VcStatus"> | Date | string
    issuerDid?: StringFilter<"VcStatus"> | string
    lastChecked?: DateTimeFilter<"VcStatus"> | Date | string
  }

  export type VcStatusOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    subjectDid?: SortOrder
    vcId?: SortOrder
    vcType?: SortOrder
    state?: SortOrder
    notBefore?: SortOrder
    notAfter?: SortOrder
    issuerDid?: SortOrder
    lastChecked?: SortOrder
  }

  export type VcStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vcId?: string
    AND?: VcStatusWhereInput | VcStatusWhereInput[]
    OR?: VcStatusWhereInput[]
    NOT?: VcStatusWhereInput | VcStatusWhereInput[]
    projectId?: StringFilter<"VcStatus"> | string
    subjectDid?: StringFilter<"VcStatus"> | string
    vcType?: StringFilter<"VcStatus"> | string
    state?: EnumVcStateFilter<"VcStatus"> | $Enums.VcState
    notBefore?: DateTimeFilter<"VcStatus"> | Date | string
    notAfter?: DateTimeFilter<"VcStatus"> | Date | string
    issuerDid?: StringFilter<"VcStatus"> | string
    lastChecked?: DateTimeFilter<"VcStatus"> | Date | string
  }, "id" | "vcId">

  export type VcStatusOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    subjectDid?: SortOrder
    vcId?: SortOrder
    vcType?: SortOrder
    state?: SortOrder
    notBefore?: SortOrder
    notAfter?: SortOrder
    issuerDid?: SortOrder
    lastChecked?: SortOrder
    _count?: VcStatusCountOrderByAggregateInput
    _max?: VcStatusMaxOrderByAggregateInput
    _min?: VcStatusMinOrderByAggregateInput
  }

  export type VcStatusScalarWhereWithAggregatesInput = {
    AND?: VcStatusScalarWhereWithAggregatesInput | VcStatusScalarWhereWithAggregatesInput[]
    OR?: VcStatusScalarWhereWithAggregatesInput[]
    NOT?: VcStatusScalarWhereWithAggregatesInput | VcStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VcStatus"> | string
    projectId?: StringWithAggregatesFilter<"VcStatus"> | string
    subjectDid?: StringWithAggregatesFilter<"VcStatus"> | string
    vcId?: StringWithAggregatesFilter<"VcStatus"> | string
    vcType?: StringWithAggregatesFilter<"VcStatus"> | string
    state?: EnumVcStateWithAggregatesFilter<"VcStatus"> | $Enums.VcState
    notBefore?: DateTimeWithAggregatesFilter<"VcStatus"> | Date | string
    notAfter?: DateTimeWithAggregatesFilter<"VcStatus"> | Date | string
    issuerDid?: StringWithAggregatesFilter<"VcStatus"> | string
    lastChecked?: DateTimeWithAggregatesFilter<"VcStatus"> | Date | string
  }

  export type SuggestionWhereInput = {
    AND?: SuggestionWhereInput | SuggestionWhereInput[]
    OR?: SuggestionWhereInput[]
    NOT?: SuggestionWhereInput | SuggestionWhereInput[]
    id?: StringFilter<"Suggestion"> | string
    controlId?: StringFilter<"Suggestion"> | string
    projectId?: StringFilter<"Suggestion"> | string
    type?: EnumSuggestionTypeFilter<"Suggestion"> | $Enums.SuggestionType
    diff?: StringFilter<"Suggestion"> | string
    targetPath?: StringFilter<"Suggestion"> | string
    confidence?: EnumConfidenceFilter<"Suggestion"> | $Enums.Confidence
    status?: EnumSuggestionStatusFilter<"Suggestion"> | $Enums.SuggestionStatus
    appliedAt?: DateTimeNullableFilter<"Suggestion"> | Date | string | null
    rejectedAt?: DateTimeNullableFilter<"Suggestion"> | Date | string | null
    metadata?: JsonNullableFilter<"Suggestion">
    createdAt?: DateTimeFilter<"Suggestion"> | Date | string
    control?: XOR<ControlRelationFilter, ControlWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type SuggestionOrderByWithRelationInput = {
    id?: SortOrder
    controlId?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    diff?: SortOrder
    targetPath?: SortOrder
    confidence?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrderInput | SortOrder
    rejectedAt?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    control?: ControlOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type SuggestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SuggestionWhereInput | SuggestionWhereInput[]
    OR?: SuggestionWhereInput[]
    NOT?: SuggestionWhereInput | SuggestionWhereInput[]
    controlId?: StringFilter<"Suggestion"> | string
    projectId?: StringFilter<"Suggestion"> | string
    type?: EnumSuggestionTypeFilter<"Suggestion"> | $Enums.SuggestionType
    diff?: StringFilter<"Suggestion"> | string
    targetPath?: StringFilter<"Suggestion"> | string
    confidence?: EnumConfidenceFilter<"Suggestion"> | $Enums.Confidence
    status?: EnumSuggestionStatusFilter<"Suggestion"> | $Enums.SuggestionStatus
    appliedAt?: DateTimeNullableFilter<"Suggestion"> | Date | string | null
    rejectedAt?: DateTimeNullableFilter<"Suggestion"> | Date | string | null
    metadata?: JsonNullableFilter<"Suggestion">
    createdAt?: DateTimeFilter<"Suggestion"> | Date | string
    control?: XOR<ControlRelationFilter, ControlWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id">

  export type SuggestionOrderByWithAggregationInput = {
    id?: SortOrder
    controlId?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    diff?: SortOrder
    targetPath?: SortOrder
    confidence?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrderInput | SortOrder
    rejectedAt?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SuggestionCountOrderByAggregateInput
    _max?: SuggestionMaxOrderByAggregateInput
    _min?: SuggestionMinOrderByAggregateInput
  }

  export type SuggestionScalarWhereWithAggregatesInput = {
    AND?: SuggestionScalarWhereWithAggregatesInput | SuggestionScalarWhereWithAggregatesInput[]
    OR?: SuggestionScalarWhereWithAggregatesInput[]
    NOT?: SuggestionScalarWhereWithAggregatesInput | SuggestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Suggestion"> | string
    controlId?: StringWithAggregatesFilter<"Suggestion"> | string
    projectId?: StringWithAggregatesFilter<"Suggestion"> | string
    type?: EnumSuggestionTypeWithAggregatesFilter<"Suggestion"> | $Enums.SuggestionType
    diff?: StringWithAggregatesFilter<"Suggestion"> | string
    targetPath?: StringWithAggregatesFilter<"Suggestion"> | string
    confidence?: EnumConfidenceWithAggregatesFilter<"Suggestion"> | $Enums.Confidence
    status?: EnumSuggestionStatusWithAggregatesFilter<"Suggestion"> | $Enums.SuggestionStatus
    appliedAt?: DateTimeNullableWithAggregatesFilter<"Suggestion"> | Date | string | null
    rejectedAt?: DateTimeNullableWithAggregatesFilter<"Suggestion"> | Date | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Suggestion">
    createdAt?: DateTimeWithAggregatesFilter<"Suggestion"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    tenantId?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resourceType?: StringFilter<"AuditLog"> | string
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    before?: JsonNullableFilter<"AuditLog">
    after?: JsonNullableFilter<"AuditLog">
    metadata?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    before?: SortOrderInput | SortOrder
    after?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    tenantId?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resourceType?: StringFilter<"AuditLog"> | string
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    before?: JsonNullableFilter<"AuditLog">
    after?: JsonNullableFilter<"AuditLog">
    metadata?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    before?: SortOrderInput | SortOrder
    after?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    tenantId?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    resourceType?: StringWithAggregatesFilter<"AuditLog"> | string
    resourceId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    before?: JsonNullableWithAggregatesFilter<"AuditLog">
    after?: JsonNullableWithAggregatesFilter<"AuditLog">
    metadata?: JsonNullableWithAggregatesFilter<"AuditLog">
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    slug: string
    tier?: $Enums.TierType
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutTenantInput
    users?: UserCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    tier?: $Enums.TierType
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutTenantInput
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierTypeFieldUpdateOperationsInput | $Enums.TierType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutTenantNestedInput
    users?: UserUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierTypeFieldUpdateOperationsInput | $Enums.TierType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutTenantNestedInput
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    slug: string
    tier?: $Enums.TierType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierTypeFieldUpdateOperationsInput | $Enums.TierType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierTypeFieldUpdateOperationsInput | $Enums.TierType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    tenantId: string
    email: string
    name: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    tenantId: string
    email: string
    name: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    slug: string
    environment?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutProjectsInput
    controls?: ControlCreateNestedManyWithoutProjectInput
    facts?: FactCreateNestedManyWithoutProjectInput
    suggestions?: SuggestionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    tenantId: string
    name: string
    slug: string
    environment?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    controls?: ControlUncheckedCreateNestedManyWithoutProjectInput
    facts?: FactUncheckedCreateNestedManyWithoutProjectInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutProjectsNestedInput
    controls?: ControlUpdateManyWithoutProjectNestedInput
    facts?: FactUpdateManyWithoutProjectNestedInput
    suggestions?: SuggestionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controls?: ControlUncheckedUpdateManyWithoutProjectNestedInput
    facts?: FactUncheckedUpdateManyWithoutProjectNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    tenantId: string
    name: string
    slug: string
    environment?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrameworkCreateInput = {
    id?: string
    name: string
    slug: string
    catalogUrl?: string | null
    version: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    controls?: ControlCreateNestedManyWithoutFrameworkInput
  }

  export type FrameworkUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    catalogUrl?: string | null
    version: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    controls?: ControlUncheckedCreateNestedManyWithoutFrameworkInput
  }

  export type FrameworkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    catalogUrl?: NullableStringFieldUpdateOperationsInput | string | null
    version?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controls?: ControlUpdateManyWithoutFrameworkNestedInput
  }

  export type FrameworkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    catalogUrl?: NullableStringFieldUpdateOperationsInput | string | null
    version?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controls?: ControlUncheckedUpdateManyWithoutFrameworkNestedInput
  }

  export type FrameworkCreateManyInput = {
    id?: string
    name: string
    slug: string
    catalogUrl?: string | null
    version: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FrameworkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    catalogUrl?: NullableStringFieldUpdateOperationsInput | string | null
    version?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrameworkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    catalogUrl?: NullableStringFieldUpdateOperationsInput | string | null
    version?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControlCreateInput = {
    id?: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutControlsInput
    framework: FrameworkCreateNestedOneWithoutControlsInput
    parentControl?: ControlCreateNestedOneWithoutChildControlsInput
    childControls?: ControlCreateNestedManyWithoutParentControlInput
    evaluations?: ControlEvaluationCreateNestedManyWithoutControlInput
    suggestions?: SuggestionCreateNestedManyWithoutControlInput
  }

  export type ControlUncheckedCreateInput = {
    id?: string
    projectId: string
    frameworkId: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    parentControlId?: string | null
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childControls?: ControlUncheckedCreateNestedManyWithoutParentControlInput
    evaluations?: ControlEvaluationUncheckedCreateNestedManyWithoutControlInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutControlInput
  }

  export type ControlUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutControlsNestedInput
    framework?: FrameworkUpdateOneRequiredWithoutControlsNestedInput
    parentControl?: ControlUpdateOneWithoutChildControlsNestedInput
    childControls?: ControlUpdateManyWithoutParentControlNestedInput
    evaluations?: ControlEvaluationUpdateManyWithoutControlNestedInput
    suggestions?: SuggestionUpdateManyWithoutControlNestedInput
  }

  export type ControlUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    frameworkId?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    parentControlId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childControls?: ControlUncheckedUpdateManyWithoutParentControlNestedInput
    evaluations?: ControlEvaluationUncheckedUpdateManyWithoutControlNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutControlNestedInput
  }

  export type ControlCreateManyInput = {
    id?: string
    projectId: string
    frameworkId: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    parentControlId?: string | null
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ControlUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControlUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    frameworkId?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    parentControlId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControlEvaluationCreateInput = {
    id?: string
    projectId: string
    runId: string
    status: $Enums.ControlStatus
    rationale: string
    evidenceRefs: JsonNullValueInput | InputJsonValue
    factsHash: string
    rulesetHash: string
    rulesetVersion: string
    nlpScore?: number | null
    riskScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    control: ControlCreateNestedOneWithoutEvaluationsInput
  }

  export type ControlEvaluationUncheckedCreateInput = {
    id?: string
    controlId: string
    projectId: string
    runId: string
    status: $Enums.ControlStatus
    rationale: string
    evidenceRefs: JsonNullValueInput | InputJsonValue
    factsHash: string
    rulesetHash: string
    rulesetVersion: string
    nlpScore?: number | null
    riskScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ControlEvaluationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    rationale?: StringFieldUpdateOperationsInput | string
    evidenceRefs?: JsonNullValueInput | InputJsonValue
    factsHash?: StringFieldUpdateOperationsInput | string
    rulesetHash?: StringFieldUpdateOperationsInput | string
    rulesetVersion?: StringFieldUpdateOperationsInput | string
    nlpScore?: NullableFloatFieldUpdateOperationsInput | number | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    control?: ControlUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type ControlEvaluationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    rationale?: StringFieldUpdateOperationsInput | string
    evidenceRefs?: JsonNullValueInput | InputJsonValue
    factsHash?: StringFieldUpdateOperationsInput | string
    rulesetHash?: StringFieldUpdateOperationsInput | string
    rulesetVersion?: StringFieldUpdateOperationsInput | string
    nlpScore?: NullableFloatFieldUpdateOperationsInput | number | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControlEvaluationCreateManyInput = {
    id?: string
    controlId: string
    projectId: string
    runId: string
    status: $Enums.ControlStatus
    rationale: string
    evidenceRefs: JsonNullValueInput | InputJsonValue
    factsHash: string
    rulesetHash: string
    rulesetVersion: string
    nlpScore?: number | null
    riskScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ControlEvaluationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    rationale?: StringFieldUpdateOperationsInput | string
    evidenceRefs?: JsonNullValueInput | InputJsonValue
    factsHash?: StringFieldUpdateOperationsInput | string
    rulesetHash?: StringFieldUpdateOperationsInput | string
    rulesetVersion?: StringFieldUpdateOperationsInput | string
    nlpScore?: NullableFloatFieldUpdateOperationsInput | number | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControlEvaluationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    rationale?: StringFieldUpdateOperationsInput | string
    evidenceRefs?: JsonNullValueInput | InputJsonValue
    factsHash?: StringFieldUpdateOperationsInput | string
    rulesetHash?: StringFieldUpdateOperationsInput | string
    rulesetVersion?: StringFieldUpdateOperationsInput | string
    nlpScore?: NullableFloatFieldUpdateOperationsInput | number | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationRunCreateInput = {
    id?: string
    projectId: string
    trigger: string
    triggeredBy?: string | null
    totalControls: number
    passed: number
    failed: number
    manual: number
    notApplicable: number
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type EvaluationRunUncheckedCreateInput = {
    id?: string
    projectId: string
    trigger: string
    triggeredBy?: string | null
    totalControls: number
    passed: number
    failed: number
    manual: number
    notApplicable: number
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type EvaluationRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    triggeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    totalControls?: IntFieldUpdateOperationsInput | number
    passed?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    manual?: IntFieldUpdateOperationsInput | number
    notApplicable?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvaluationRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    triggeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    totalControls?: IntFieldUpdateOperationsInput | number
    passed?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    manual?: IntFieldUpdateOperationsInput | number
    notApplicable?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvaluationRunCreateManyInput = {
    id?: string
    projectId: string
    trigger: string
    triggeredBy?: string | null
    totalControls: number
    passed: number
    failed: number
    manual: number
    notApplicable: number
    startedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type EvaluationRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    triggeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    totalControls?: IntFieldUpdateOperationsInput | number
    passed?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    manual?: IntFieldUpdateOperationsInput | number
    notApplicable?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvaluationRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    triggeredBy?: NullableStringFieldUpdateOperationsInput | string | null
    totalControls?: IntFieldUpdateOperationsInput | number
    passed?: IntFieldUpdateOperationsInput | number
    failed?: IntFieldUpdateOperationsInput | number
    manual?: IntFieldUpdateOperationsInput | number
    notApplicable?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FactCreateInput = {
    id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    source: string
    sourceId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    collectedAt: Date | string
    expiresAt?: Date | string | null
    project: ProjectCreateNestedOneWithoutFactsInput
  }

  export type FactUncheckedCreateInput = {
    id?: string
    projectId: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    source: string
    sourceId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    collectedAt: Date | string
    expiresAt?: Date | string | null
  }

  export type FactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project?: ProjectUpdateOneRequiredWithoutFactsNestedInput
  }

  export type FactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FactCreateManyInput = {
    id?: string
    projectId: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    source: string
    sourceId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    collectedAt: Date | string
    expiresAt?: Date | string | null
  }

  export type FactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PolicySegmentCreateInput = {
    id?: string
    projectId: string
    path: string
    lineNumber?: number | null
    text: string
    embedding?: PolicySegmentCreateembeddingInput | number[]
    version: string
    baselineHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicySegmentUncheckedCreateInput = {
    id?: string
    projectId: string
    path: string
    lineNumber?: number | null
    text: string
    embedding?: PolicySegmentCreateembeddingInput | number[]
    version: string
    baselineHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicySegmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    embedding?: PolicySegmentUpdateembeddingInput | number[]
    version?: StringFieldUpdateOperationsInput | string
    baselineHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicySegmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    embedding?: PolicySegmentUpdateembeddingInput | number[]
    version?: StringFieldUpdateOperationsInput | string
    baselineHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicySegmentCreateManyInput = {
    id?: string
    projectId: string
    path: string
    lineNumber?: number | null
    text: string
    embedding?: PolicySegmentCreateembeddingInput | number[]
    version: string
    baselineHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicySegmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    embedding?: PolicySegmentUpdateembeddingInput | number[]
    version?: StringFieldUpdateOperationsInput | string
    baselineHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicySegmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    text?: StringFieldUpdateOperationsInput | string
    embedding?: PolicySegmentUpdateembeddingInput | number[]
    version?: StringFieldUpdateOperationsInput | string
    baselineHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VcStatusCreateInput = {
    id?: string
    projectId: string
    subjectDid: string
    vcId: string
    vcType: string
    state?: $Enums.VcState
    notBefore: Date | string
    notAfter: Date | string
    issuerDid: string
    lastChecked?: Date | string
  }

  export type VcStatusUncheckedCreateInput = {
    id?: string
    projectId: string
    subjectDid: string
    vcId: string
    vcType: string
    state?: $Enums.VcState
    notBefore: Date | string
    notAfter: Date | string
    issuerDid: string
    lastChecked?: Date | string
  }

  export type VcStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    subjectDid?: StringFieldUpdateOperationsInput | string
    vcId?: StringFieldUpdateOperationsInput | string
    vcType?: StringFieldUpdateOperationsInput | string
    state?: EnumVcStateFieldUpdateOperationsInput | $Enums.VcState
    notBefore?: DateTimeFieldUpdateOperationsInput | Date | string
    notAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    issuerDid?: StringFieldUpdateOperationsInput | string
    lastChecked?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VcStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    subjectDid?: StringFieldUpdateOperationsInput | string
    vcId?: StringFieldUpdateOperationsInput | string
    vcType?: StringFieldUpdateOperationsInput | string
    state?: EnumVcStateFieldUpdateOperationsInput | $Enums.VcState
    notBefore?: DateTimeFieldUpdateOperationsInput | Date | string
    notAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    issuerDid?: StringFieldUpdateOperationsInput | string
    lastChecked?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VcStatusCreateManyInput = {
    id?: string
    projectId: string
    subjectDid: string
    vcId: string
    vcType: string
    state?: $Enums.VcState
    notBefore: Date | string
    notAfter: Date | string
    issuerDid: string
    lastChecked?: Date | string
  }

  export type VcStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    subjectDid?: StringFieldUpdateOperationsInput | string
    vcId?: StringFieldUpdateOperationsInput | string
    vcType?: StringFieldUpdateOperationsInput | string
    state?: EnumVcStateFieldUpdateOperationsInput | $Enums.VcState
    notBefore?: DateTimeFieldUpdateOperationsInput | Date | string
    notAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    issuerDid?: StringFieldUpdateOperationsInput | string
    lastChecked?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VcStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    subjectDid?: StringFieldUpdateOperationsInput | string
    vcId?: StringFieldUpdateOperationsInput | string
    vcType?: StringFieldUpdateOperationsInput | string
    state?: EnumVcStateFieldUpdateOperationsInput | $Enums.VcState
    notBefore?: DateTimeFieldUpdateOperationsInput | Date | string
    notAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    issuerDid?: StringFieldUpdateOperationsInput | string
    lastChecked?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionCreateInput = {
    id?: string
    type: $Enums.SuggestionType
    diff: string
    targetPath: string
    confidence?: $Enums.Confidence
    status?: $Enums.SuggestionStatus
    appliedAt?: Date | string | null
    rejectedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    control: ControlCreateNestedOneWithoutSuggestionsInput
    project: ProjectCreateNestedOneWithoutSuggestionsInput
  }

  export type SuggestionUncheckedCreateInput = {
    id?: string
    controlId: string
    projectId: string
    type: $Enums.SuggestionType
    diff: string
    targetPath: string
    confidence?: $Enums.Confidence
    status?: $Enums.SuggestionStatus
    appliedAt?: Date | string | null
    rejectedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SuggestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSuggestionTypeFieldUpdateOperationsInput | $Enums.SuggestionType
    diff?: StringFieldUpdateOperationsInput | string
    targetPath?: StringFieldUpdateOperationsInput | string
    confidence?: EnumConfidenceFieldUpdateOperationsInput | $Enums.Confidence
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    control?: ControlUpdateOneRequiredWithoutSuggestionsNestedInput
    project?: ProjectUpdateOneRequiredWithoutSuggestionsNestedInput
  }

  export type SuggestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumSuggestionTypeFieldUpdateOperationsInput | $Enums.SuggestionType
    diff?: StringFieldUpdateOperationsInput | string
    targetPath?: StringFieldUpdateOperationsInput | string
    confidence?: EnumConfidenceFieldUpdateOperationsInput | $Enums.Confidence
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionCreateManyInput = {
    id?: string
    controlId: string
    projectId: string
    type: $Enums.SuggestionType
    diff: string
    targetPath: string
    confidence?: $Enums.Confidence
    status?: $Enums.SuggestionStatus
    appliedAt?: Date | string | null
    rejectedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SuggestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSuggestionTypeFieldUpdateOperationsInput | $Enums.SuggestionType
    diff?: StringFieldUpdateOperationsInput | string
    targetPath?: StringFieldUpdateOperationsInput | string
    confidence?: EnumConfidenceFieldUpdateOperationsInput | $Enums.Confidence
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumSuggestionTypeFieldUpdateOperationsInput | $Enums.SuggestionType
    diff?: StringFieldUpdateOperationsInput | string
    targetPath?: StringFieldUpdateOperationsInput | string
    confidence?: EnumConfidenceFieldUpdateOperationsInput | $Enums.Confidence
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    tenantId: string
    userId?: string | null
    action: string
    resourceType: string
    resourceId?: string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    timestamp?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    tenantId: string
    userId?: string | null
    action: string
    resourceType: string
    resourceId?: string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    timestamp?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    tenantId: string
    userId?: string | null
    action: string
    resourceType: string
    resourceId?: string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    timestamp?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    before?: NullableJsonNullValueInput | InputJsonValue
    after?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumTierTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TierType | EnumTierTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TierType[] | ListEnumTierTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TierType[] | ListEnumTierTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTierTypeFilter<$PrismaModel> | $Enums.TierType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    tier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumTierTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TierType | EnumTierTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TierType[] | ListEnumTierTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TierType[] | ListEnumTierTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTierTypeWithAggregatesFilter<$PrismaModel> | $Enums.TierType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTierTypeFilter<$PrismaModel>
    _max?: NestedEnumTierTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TenantRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ControlListRelationFilter = {
    every?: ControlWhereInput
    some?: ControlWhereInput
    none?: ControlWhereInput
  }

  export type FactListRelationFilter = {
    every?: FactWhereInput
    some?: FactWhereInput
    none?: FactWhereInput
  }

  export type SuggestionListRelationFilter = {
    every?: SuggestionWhereInput
    some?: SuggestionWhereInput
    none?: SuggestionWhereInput
  }

  export type ControlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuggestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectTenantIdSlugCompoundUniqueInput = {
    tenantId: string
    slug: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    environment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    environment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    environment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FrameworkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    catalogUrl?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FrameworkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    catalogUrl?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FrameworkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    catalogUrl?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumCriticalityFilter<$PrismaModel = never> = {
    equals?: $Enums.Criticality | EnumCriticalityFieldRefInput<$PrismaModel>
    in?: $Enums.Criticality[] | ListEnumCriticalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Criticality[] | ListEnumCriticalityFieldRefInput<$PrismaModel>
    not?: NestedEnumCriticalityFilter<$PrismaModel> | $Enums.Criticality
  }

  export type EnumControlStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ControlStatus | EnumControlStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ControlStatus[] | ListEnumControlStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ControlStatus[] | ListEnumControlStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumControlStatusFilter<$PrismaModel> | $Enums.ControlStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type FrameworkRelationFilter = {
    is?: FrameworkWhereInput
    isNot?: FrameworkWhereInput
  }

  export type ControlNullableRelationFilter = {
    is?: ControlWhereInput | null
    isNot?: ControlWhereInput | null
  }

  export type ControlEvaluationListRelationFilter = {
    every?: ControlEvaluationWhereInput
    some?: ControlEvaluationWhereInput
    none?: ControlEvaluationWhereInput
  }

  export type ControlEvaluationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ControlProjectIdFrameworkIdControlIdCompoundUniqueInput = {
    projectId: string
    frameworkId: string
    controlId: string
  }

  export type ControlCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    frameworkId?: SortOrder
    controlId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    parameters?: SortOrder
    criticality?: SortOrder
    parentControlId?: SortOrder
    currentStatus?: SortOrder
    lastEvaluatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ControlMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    frameworkId?: SortOrder
    controlId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    criticality?: SortOrder
    parentControlId?: SortOrder
    currentStatus?: SortOrder
    lastEvaluatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ControlMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    frameworkId?: SortOrder
    controlId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    criticality?: SortOrder
    parentControlId?: SortOrder
    currentStatus?: SortOrder
    lastEvaluatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumCriticalityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Criticality | EnumCriticalityFieldRefInput<$PrismaModel>
    in?: $Enums.Criticality[] | ListEnumCriticalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Criticality[] | ListEnumCriticalityFieldRefInput<$PrismaModel>
    not?: NestedEnumCriticalityWithAggregatesFilter<$PrismaModel> | $Enums.Criticality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCriticalityFilter<$PrismaModel>
    _max?: NestedEnumCriticalityFilter<$PrismaModel>
  }

  export type EnumControlStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ControlStatus | EnumControlStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ControlStatus[] | ListEnumControlStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ControlStatus[] | ListEnumControlStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumControlStatusWithAggregatesFilter<$PrismaModel> | $Enums.ControlStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumControlStatusFilter<$PrismaModel>
    _max?: NestedEnumControlStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ControlRelationFilter = {
    is?: ControlWhereInput
    isNot?: ControlWhereInput
  }

  export type ControlEvaluationCountOrderByAggregateInput = {
    id?: SortOrder
    controlId?: SortOrder
    projectId?: SortOrder
    runId?: SortOrder
    status?: SortOrder
    rationale?: SortOrder
    evidenceRefs?: SortOrder
    factsHash?: SortOrder
    rulesetHash?: SortOrder
    rulesetVersion?: SortOrder
    nlpScore?: SortOrder
    riskScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ControlEvaluationAvgOrderByAggregateInput = {
    nlpScore?: SortOrder
    riskScore?: SortOrder
  }

  export type ControlEvaluationMaxOrderByAggregateInput = {
    id?: SortOrder
    controlId?: SortOrder
    projectId?: SortOrder
    runId?: SortOrder
    status?: SortOrder
    rationale?: SortOrder
    factsHash?: SortOrder
    rulesetHash?: SortOrder
    rulesetVersion?: SortOrder
    nlpScore?: SortOrder
    riskScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ControlEvaluationMinOrderByAggregateInput = {
    id?: SortOrder
    controlId?: SortOrder
    projectId?: SortOrder
    runId?: SortOrder
    status?: SortOrder
    rationale?: SortOrder
    factsHash?: SortOrder
    rulesetHash?: SortOrder
    rulesetVersion?: SortOrder
    nlpScore?: SortOrder
    riskScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ControlEvaluationSumOrderByAggregateInput = {
    nlpScore?: SortOrder
    riskScore?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EvaluationRunCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    trigger?: SortOrder
    triggeredBy?: SortOrder
    totalControls?: SortOrder
    passed?: SortOrder
    failed?: SortOrder
    manual?: SortOrder
    notApplicable?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type EvaluationRunAvgOrderByAggregateInput = {
    totalControls?: SortOrder
    passed?: SortOrder
    failed?: SortOrder
    manual?: SortOrder
    notApplicable?: SortOrder
  }

  export type EvaluationRunMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    trigger?: SortOrder
    triggeredBy?: SortOrder
    totalControls?: SortOrder
    passed?: SortOrder
    failed?: SortOrder
    manual?: SortOrder
    notApplicable?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type EvaluationRunMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    trigger?: SortOrder
    triggeredBy?: SortOrder
    totalControls?: SortOrder
    passed?: SortOrder
    failed?: SortOrder
    manual?: SortOrder
    notApplicable?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type EvaluationRunSumOrderByAggregateInput = {
    totalControls?: SortOrder
    passed?: SortOrder
    failed?: SortOrder
    manual?: SortOrder
    notApplicable?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FactProjectIdKeySourceCompoundUniqueInput = {
    projectId: string
    key: string
    source: string
  }

  export type FactCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    metadata?: SortOrder
    collectedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type FactMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    collectedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type FactMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    collectedAt?: SortOrder
    expiresAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    has?: number | FloatFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListFloatFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListFloatFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PolicySegmentCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    path?: SortOrder
    lineNumber?: SortOrder
    text?: SortOrder
    embedding?: SortOrder
    version?: SortOrder
    baselineHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicySegmentAvgOrderByAggregateInput = {
    lineNumber?: SortOrder
    embedding?: SortOrder
  }

  export type PolicySegmentMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    path?: SortOrder
    lineNumber?: SortOrder
    text?: SortOrder
    version?: SortOrder
    baselineHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicySegmentMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    path?: SortOrder
    lineNumber?: SortOrder
    text?: SortOrder
    version?: SortOrder
    baselineHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicySegmentSumOrderByAggregateInput = {
    lineNumber?: SortOrder
    embedding?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumVcStateFilter<$PrismaModel = never> = {
    equals?: $Enums.VcState | EnumVcStateFieldRefInput<$PrismaModel>
    in?: $Enums.VcState[] | ListEnumVcStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.VcState[] | ListEnumVcStateFieldRefInput<$PrismaModel>
    not?: NestedEnumVcStateFilter<$PrismaModel> | $Enums.VcState
  }

  export type VcStatusCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    subjectDid?: SortOrder
    vcId?: SortOrder
    vcType?: SortOrder
    state?: SortOrder
    notBefore?: SortOrder
    notAfter?: SortOrder
    issuerDid?: SortOrder
    lastChecked?: SortOrder
  }

  export type VcStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    subjectDid?: SortOrder
    vcId?: SortOrder
    vcType?: SortOrder
    state?: SortOrder
    notBefore?: SortOrder
    notAfter?: SortOrder
    issuerDid?: SortOrder
    lastChecked?: SortOrder
  }

  export type VcStatusMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    subjectDid?: SortOrder
    vcId?: SortOrder
    vcType?: SortOrder
    state?: SortOrder
    notBefore?: SortOrder
    notAfter?: SortOrder
    issuerDid?: SortOrder
    lastChecked?: SortOrder
  }

  export type EnumVcStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VcState | EnumVcStateFieldRefInput<$PrismaModel>
    in?: $Enums.VcState[] | ListEnumVcStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.VcState[] | ListEnumVcStateFieldRefInput<$PrismaModel>
    not?: NestedEnumVcStateWithAggregatesFilter<$PrismaModel> | $Enums.VcState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVcStateFilter<$PrismaModel>
    _max?: NestedEnumVcStateFilter<$PrismaModel>
  }

  export type EnumSuggestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SuggestionType | EnumSuggestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SuggestionType[] | ListEnumSuggestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuggestionType[] | ListEnumSuggestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSuggestionTypeFilter<$PrismaModel> | $Enums.SuggestionType
  }

  export type EnumConfidenceFilter<$PrismaModel = never> = {
    equals?: $Enums.Confidence | EnumConfidenceFieldRefInput<$PrismaModel>
    in?: $Enums.Confidence[] | ListEnumConfidenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Confidence[] | ListEnumConfidenceFieldRefInput<$PrismaModel>
    not?: NestedEnumConfidenceFilter<$PrismaModel> | $Enums.Confidence
  }

  export type EnumSuggestionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SuggestionStatus | EnumSuggestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SuggestionStatus[] | ListEnumSuggestionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuggestionStatus[] | ListEnumSuggestionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSuggestionStatusFilter<$PrismaModel> | $Enums.SuggestionStatus
  }

  export type SuggestionCountOrderByAggregateInput = {
    id?: SortOrder
    controlId?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    diff?: SortOrder
    targetPath?: SortOrder
    confidence?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    rejectedAt?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type SuggestionMaxOrderByAggregateInput = {
    id?: SortOrder
    controlId?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    diff?: SortOrder
    targetPath?: SortOrder
    confidence?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    rejectedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SuggestionMinOrderByAggregateInput = {
    id?: SortOrder
    controlId?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    diff?: SortOrder
    targetPath?: SortOrder
    confidence?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    rejectedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSuggestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SuggestionType | EnumSuggestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SuggestionType[] | ListEnumSuggestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuggestionType[] | ListEnumSuggestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSuggestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SuggestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSuggestionTypeFilter<$PrismaModel>
    _max?: NestedEnumSuggestionTypeFilter<$PrismaModel>
  }

  export type EnumConfidenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Confidence | EnumConfidenceFieldRefInput<$PrismaModel>
    in?: $Enums.Confidence[] | ListEnumConfidenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Confidence[] | ListEnumConfidenceFieldRefInput<$PrismaModel>
    not?: NestedEnumConfidenceWithAggregatesFilter<$PrismaModel> | $Enums.Confidence
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConfidenceFilter<$PrismaModel>
    _max?: NestedEnumConfidenceFilter<$PrismaModel>
  }

  export type EnumSuggestionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SuggestionStatus | EnumSuggestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SuggestionStatus[] | ListEnumSuggestionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuggestionStatus[] | ListEnumSuggestionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSuggestionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SuggestionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSuggestionStatusFilter<$PrismaModel>
    _max?: NestedEnumSuggestionStatusFilter<$PrismaModel>
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    before?: SortOrder
    after?: SortOrder
    metadata?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutTenantInput = {
    create?: XOR<ProjectCreateWithoutTenantInput, ProjectUncheckedCreateWithoutTenantInput> | ProjectCreateWithoutTenantInput[] | ProjectUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTenantInput | ProjectCreateOrConnectWithoutTenantInput[]
    createMany?: ProjectCreateManyTenantInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ProjectCreateWithoutTenantInput, ProjectUncheckedCreateWithoutTenantInput> | ProjectCreateWithoutTenantInput[] | ProjectUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTenantInput | ProjectCreateOrConnectWithoutTenantInput[]
    createMany?: ProjectCreateManyTenantInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTierTypeFieldUpdateOperationsInput = {
    set?: $Enums.TierType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ProjectCreateWithoutTenantInput, ProjectUncheckedCreateWithoutTenantInput> | ProjectCreateWithoutTenantInput[] | ProjectUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTenantInput | ProjectCreateOrConnectWithoutTenantInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTenantInput | ProjectUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ProjectCreateManyTenantInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTenantInput | ProjectUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTenantInput | ProjectUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ProjectCreateWithoutTenantInput, ProjectUncheckedCreateWithoutTenantInput> | ProjectCreateWithoutTenantInput[] | ProjectUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTenantInput | ProjectCreateOrConnectWithoutTenantInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTenantInput | ProjectUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ProjectCreateManyTenantInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTenantInput | ProjectUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTenantInput | ProjectUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutUsersInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    connect?: TenantWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    upsert?: TenantUpsertWithoutUsersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUsersInput, TenantUpdateWithoutUsersInput>, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type TenantCreateNestedOneWithoutProjectsInput = {
    create?: XOR<TenantCreateWithoutProjectsInput, TenantUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutProjectsInput
    connect?: TenantWhereUniqueInput
  }

  export type ControlCreateNestedManyWithoutProjectInput = {
    create?: XOR<ControlCreateWithoutProjectInput, ControlUncheckedCreateWithoutProjectInput> | ControlCreateWithoutProjectInput[] | ControlUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ControlCreateOrConnectWithoutProjectInput | ControlCreateOrConnectWithoutProjectInput[]
    createMany?: ControlCreateManyProjectInputEnvelope
    connect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
  }

  export type FactCreateNestedManyWithoutProjectInput = {
    create?: XOR<FactCreateWithoutProjectInput, FactUncheckedCreateWithoutProjectInput> | FactCreateWithoutProjectInput[] | FactUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FactCreateOrConnectWithoutProjectInput | FactCreateOrConnectWithoutProjectInput[]
    createMany?: FactCreateManyProjectInputEnvelope
    connect?: FactWhereUniqueInput | FactWhereUniqueInput[]
  }

  export type SuggestionCreateNestedManyWithoutProjectInput = {
    create?: XOR<SuggestionCreateWithoutProjectInput, SuggestionUncheckedCreateWithoutProjectInput> | SuggestionCreateWithoutProjectInput[] | SuggestionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutProjectInput | SuggestionCreateOrConnectWithoutProjectInput[]
    createMany?: SuggestionCreateManyProjectInputEnvelope
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
  }

  export type ControlUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ControlCreateWithoutProjectInput, ControlUncheckedCreateWithoutProjectInput> | ControlCreateWithoutProjectInput[] | ControlUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ControlCreateOrConnectWithoutProjectInput | ControlCreateOrConnectWithoutProjectInput[]
    createMany?: ControlCreateManyProjectInputEnvelope
    connect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
  }

  export type FactUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<FactCreateWithoutProjectInput, FactUncheckedCreateWithoutProjectInput> | FactCreateWithoutProjectInput[] | FactUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FactCreateOrConnectWithoutProjectInput | FactCreateOrConnectWithoutProjectInput[]
    createMany?: FactCreateManyProjectInputEnvelope
    connect?: FactWhereUniqueInput | FactWhereUniqueInput[]
  }

  export type SuggestionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<SuggestionCreateWithoutProjectInput, SuggestionUncheckedCreateWithoutProjectInput> | SuggestionCreateWithoutProjectInput[] | SuggestionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutProjectInput | SuggestionCreateOrConnectWithoutProjectInput[]
    createMany?: SuggestionCreateManyProjectInputEnvelope
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<TenantCreateWithoutProjectsInput, TenantUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutProjectsInput
    upsert?: TenantUpsertWithoutProjectsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutProjectsInput, TenantUpdateWithoutProjectsInput>, TenantUncheckedUpdateWithoutProjectsInput>
  }

  export type ControlUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ControlCreateWithoutProjectInput, ControlUncheckedCreateWithoutProjectInput> | ControlCreateWithoutProjectInput[] | ControlUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ControlCreateOrConnectWithoutProjectInput | ControlCreateOrConnectWithoutProjectInput[]
    upsert?: ControlUpsertWithWhereUniqueWithoutProjectInput | ControlUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ControlCreateManyProjectInputEnvelope
    set?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    disconnect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    delete?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    connect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    update?: ControlUpdateWithWhereUniqueWithoutProjectInput | ControlUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ControlUpdateManyWithWhereWithoutProjectInput | ControlUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ControlScalarWhereInput | ControlScalarWhereInput[]
  }

  export type FactUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FactCreateWithoutProjectInput, FactUncheckedCreateWithoutProjectInput> | FactCreateWithoutProjectInput[] | FactUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FactCreateOrConnectWithoutProjectInput | FactCreateOrConnectWithoutProjectInput[]
    upsert?: FactUpsertWithWhereUniqueWithoutProjectInput | FactUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FactCreateManyProjectInputEnvelope
    set?: FactWhereUniqueInput | FactWhereUniqueInput[]
    disconnect?: FactWhereUniqueInput | FactWhereUniqueInput[]
    delete?: FactWhereUniqueInput | FactWhereUniqueInput[]
    connect?: FactWhereUniqueInput | FactWhereUniqueInput[]
    update?: FactUpdateWithWhereUniqueWithoutProjectInput | FactUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FactUpdateManyWithWhereWithoutProjectInput | FactUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FactScalarWhereInput | FactScalarWhereInput[]
  }

  export type SuggestionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SuggestionCreateWithoutProjectInput, SuggestionUncheckedCreateWithoutProjectInput> | SuggestionCreateWithoutProjectInput[] | SuggestionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutProjectInput | SuggestionCreateOrConnectWithoutProjectInput[]
    upsert?: SuggestionUpsertWithWhereUniqueWithoutProjectInput | SuggestionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SuggestionCreateManyProjectInputEnvelope
    set?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    disconnect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    delete?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    update?: SuggestionUpdateWithWhereUniqueWithoutProjectInput | SuggestionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SuggestionUpdateManyWithWhereWithoutProjectInput | SuggestionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
  }

  export type ControlUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ControlCreateWithoutProjectInput, ControlUncheckedCreateWithoutProjectInput> | ControlCreateWithoutProjectInput[] | ControlUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ControlCreateOrConnectWithoutProjectInput | ControlCreateOrConnectWithoutProjectInput[]
    upsert?: ControlUpsertWithWhereUniqueWithoutProjectInput | ControlUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ControlCreateManyProjectInputEnvelope
    set?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    disconnect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    delete?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    connect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    update?: ControlUpdateWithWhereUniqueWithoutProjectInput | ControlUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ControlUpdateManyWithWhereWithoutProjectInput | ControlUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ControlScalarWhereInput | ControlScalarWhereInput[]
  }

  export type FactUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FactCreateWithoutProjectInput, FactUncheckedCreateWithoutProjectInput> | FactCreateWithoutProjectInput[] | FactUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FactCreateOrConnectWithoutProjectInput | FactCreateOrConnectWithoutProjectInput[]
    upsert?: FactUpsertWithWhereUniqueWithoutProjectInput | FactUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FactCreateManyProjectInputEnvelope
    set?: FactWhereUniqueInput | FactWhereUniqueInput[]
    disconnect?: FactWhereUniqueInput | FactWhereUniqueInput[]
    delete?: FactWhereUniqueInput | FactWhereUniqueInput[]
    connect?: FactWhereUniqueInput | FactWhereUniqueInput[]
    update?: FactUpdateWithWhereUniqueWithoutProjectInput | FactUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FactUpdateManyWithWhereWithoutProjectInput | FactUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FactScalarWhereInput | FactScalarWhereInput[]
  }

  export type SuggestionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SuggestionCreateWithoutProjectInput, SuggestionUncheckedCreateWithoutProjectInput> | SuggestionCreateWithoutProjectInput[] | SuggestionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutProjectInput | SuggestionCreateOrConnectWithoutProjectInput[]
    upsert?: SuggestionUpsertWithWhereUniqueWithoutProjectInput | SuggestionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SuggestionCreateManyProjectInputEnvelope
    set?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    disconnect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    delete?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    update?: SuggestionUpdateWithWhereUniqueWithoutProjectInput | SuggestionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SuggestionUpdateManyWithWhereWithoutProjectInput | SuggestionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
  }

  export type ControlCreateNestedManyWithoutFrameworkInput = {
    create?: XOR<ControlCreateWithoutFrameworkInput, ControlUncheckedCreateWithoutFrameworkInput> | ControlCreateWithoutFrameworkInput[] | ControlUncheckedCreateWithoutFrameworkInput[]
    connectOrCreate?: ControlCreateOrConnectWithoutFrameworkInput | ControlCreateOrConnectWithoutFrameworkInput[]
    createMany?: ControlCreateManyFrameworkInputEnvelope
    connect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
  }

  export type ControlUncheckedCreateNestedManyWithoutFrameworkInput = {
    create?: XOR<ControlCreateWithoutFrameworkInput, ControlUncheckedCreateWithoutFrameworkInput> | ControlCreateWithoutFrameworkInput[] | ControlUncheckedCreateWithoutFrameworkInput[]
    connectOrCreate?: ControlCreateOrConnectWithoutFrameworkInput | ControlCreateOrConnectWithoutFrameworkInput[]
    createMany?: ControlCreateManyFrameworkInputEnvelope
    connect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ControlUpdateManyWithoutFrameworkNestedInput = {
    create?: XOR<ControlCreateWithoutFrameworkInput, ControlUncheckedCreateWithoutFrameworkInput> | ControlCreateWithoutFrameworkInput[] | ControlUncheckedCreateWithoutFrameworkInput[]
    connectOrCreate?: ControlCreateOrConnectWithoutFrameworkInput | ControlCreateOrConnectWithoutFrameworkInput[]
    upsert?: ControlUpsertWithWhereUniqueWithoutFrameworkInput | ControlUpsertWithWhereUniqueWithoutFrameworkInput[]
    createMany?: ControlCreateManyFrameworkInputEnvelope
    set?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    disconnect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    delete?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    connect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    update?: ControlUpdateWithWhereUniqueWithoutFrameworkInput | ControlUpdateWithWhereUniqueWithoutFrameworkInput[]
    updateMany?: ControlUpdateManyWithWhereWithoutFrameworkInput | ControlUpdateManyWithWhereWithoutFrameworkInput[]
    deleteMany?: ControlScalarWhereInput | ControlScalarWhereInput[]
  }

  export type ControlUncheckedUpdateManyWithoutFrameworkNestedInput = {
    create?: XOR<ControlCreateWithoutFrameworkInput, ControlUncheckedCreateWithoutFrameworkInput> | ControlCreateWithoutFrameworkInput[] | ControlUncheckedCreateWithoutFrameworkInput[]
    connectOrCreate?: ControlCreateOrConnectWithoutFrameworkInput | ControlCreateOrConnectWithoutFrameworkInput[]
    upsert?: ControlUpsertWithWhereUniqueWithoutFrameworkInput | ControlUpsertWithWhereUniqueWithoutFrameworkInput[]
    createMany?: ControlCreateManyFrameworkInputEnvelope
    set?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    disconnect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    delete?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    connect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    update?: ControlUpdateWithWhereUniqueWithoutFrameworkInput | ControlUpdateWithWhereUniqueWithoutFrameworkInput[]
    updateMany?: ControlUpdateManyWithWhereWithoutFrameworkInput | ControlUpdateManyWithWhereWithoutFrameworkInput[]
    deleteMany?: ControlScalarWhereInput | ControlScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutControlsInput = {
    create?: XOR<ProjectCreateWithoutControlsInput, ProjectUncheckedCreateWithoutControlsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutControlsInput
    connect?: ProjectWhereUniqueInput
  }

  export type FrameworkCreateNestedOneWithoutControlsInput = {
    create?: XOR<FrameworkCreateWithoutControlsInput, FrameworkUncheckedCreateWithoutControlsInput>
    connectOrCreate?: FrameworkCreateOrConnectWithoutControlsInput
    connect?: FrameworkWhereUniqueInput
  }

  export type ControlCreateNestedOneWithoutChildControlsInput = {
    create?: XOR<ControlCreateWithoutChildControlsInput, ControlUncheckedCreateWithoutChildControlsInput>
    connectOrCreate?: ControlCreateOrConnectWithoutChildControlsInput
    connect?: ControlWhereUniqueInput
  }

  export type ControlCreateNestedManyWithoutParentControlInput = {
    create?: XOR<ControlCreateWithoutParentControlInput, ControlUncheckedCreateWithoutParentControlInput> | ControlCreateWithoutParentControlInput[] | ControlUncheckedCreateWithoutParentControlInput[]
    connectOrCreate?: ControlCreateOrConnectWithoutParentControlInput | ControlCreateOrConnectWithoutParentControlInput[]
    createMany?: ControlCreateManyParentControlInputEnvelope
    connect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
  }

  export type ControlEvaluationCreateNestedManyWithoutControlInput = {
    create?: XOR<ControlEvaluationCreateWithoutControlInput, ControlEvaluationUncheckedCreateWithoutControlInput> | ControlEvaluationCreateWithoutControlInput[] | ControlEvaluationUncheckedCreateWithoutControlInput[]
    connectOrCreate?: ControlEvaluationCreateOrConnectWithoutControlInput | ControlEvaluationCreateOrConnectWithoutControlInput[]
    createMany?: ControlEvaluationCreateManyControlInputEnvelope
    connect?: ControlEvaluationWhereUniqueInput | ControlEvaluationWhereUniqueInput[]
  }

  export type SuggestionCreateNestedManyWithoutControlInput = {
    create?: XOR<SuggestionCreateWithoutControlInput, SuggestionUncheckedCreateWithoutControlInput> | SuggestionCreateWithoutControlInput[] | SuggestionUncheckedCreateWithoutControlInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutControlInput | SuggestionCreateOrConnectWithoutControlInput[]
    createMany?: SuggestionCreateManyControlInputEnvelope
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
  }

  export type ControlUncheckedCreateNestedManyWithoutParentControlInput = {
    create?: XOR<ControlCreateWithoutParentControlInput, ControlUncheckedCreateWithoutParentControlInput> | ControlCreateWithoutParentControlInput[] | ControlUncheckedCreateWithoutParentControlInput[]
    connectOrCreate?: ControlCreateOrConnectWithoutParentControlInput | ControlCreateOrConnectWithoutParentControlInput[]
    createMany?: ControlCreateManyParentControlInputEnvelope
    connect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
  }

  export type ControlEvaluationUncheckedCreateNestedManyWithoutControlInput = {
    create?: XOR<ControlEvaluationCreateWithoutControlInput, ControlEvaluationUncheckedCreateWithoutControlInput> | ControlEvaluationCreateWithoutControlInput[] | ControlEvaluationUncheckedCreateWithoutControlInput[]
    connectOrCreate?: ControlEvaluationCreateOrConnectWithoutControlInput | ControlEvaluationCreateOrConnectWithoutControlInput[]
    createMany?: ControlEvaluationCreateManyControlInputEnvelope
    connect?: ControlEvaluationWhereUniqueInput | ControlEvaluationWhereUniqueInput[]
  }

  export type SuggestionUncheckedCreateNestedManyWithoutControlInput = {
    create?: XOR<SuggestionCreateWithoutControlInput, SuggestionUncheckedCreateWithoutControlInput> | SuggestionCreateWithoutControlInput[] | SuggestionUncheckedCreateWithoutControlInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutControlInput | SuggestionCreateOrConnectWithoutControlInput[]
    createMany?: SuggestionCreateManyControlInputEnvelope
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
  }

  export type EnumCriticalityFieldUpdateOperationsInput = {
    set?: $Enums.Criticality
  }

  export type EnumControlStatusFieldUpdateOperationsInput = {
    set?: $Enums.ControlStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProjectUpdateOneRequiredWithoutControlsNestedInput = {
    create?: XOR<ProjectCreateWithoutControlsInput, ProjectUncheckedCreateWithoutControlsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutControlsInput
    upsert?: ProjectUpsertWithoutControlsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutControlsInput, ProjectUpdateWithoutControlsInput>, ProjectUncheckedUpdateWithoutControlsInput>
  }

  export type FrameworkUpdateOneRequiredWithoutControlsNestedInput = {
    create?: XOR<FrameworkCreateWithoutControlsInput, FrameworkUncheckedCreateWithoutControlsInput>
    connectOrCreate?: FrameworkCreateOrConnectWithoutControlsInput
    upsert?: FrameworkUpsertWithoutControlsInput
    connect?: FrameworkWhereUniqueInput
    update?: XOR<XOR<FrameworkUpdateToOneWithWhereWithoutControlsInput, FrameworkUpdateWithoutControlsInput>, FrameworkUncheckedUpdateWithoutControlsInput>
  }

  export type ControlUpdateOneWithoutChildControlsNestedInput = {
    create?: XOR<ControlCreateWithoutChildControlsInput, ControlUncheckedCreateWithoutChildControlsInput>
    connectOrCreate?: ControlCreateOrConnectWithoutChildControlsInput
    upsert?: ControlUpsertWithoutChildControlsInput
    disconnect?: ControlWhereInput | boolean
    delete?: ControlWhereInput | boolean
    connect?: ControlWhereUniqueInput
    update?: XOR<XOR<ControlUpdateToOneWithWhereWithoutChildControlsInput, ControlUpdateWithoutChildControlsInput>, ControlUncheckedUpdateWithoutChildControlsInput>
  }

  export type ControlUpdateManyWithoutParentControlNestedInput = {
    create?: XOR<ControlCreateWithoutParentControlInput, ControlUncheckedCreateWithoutParentControlInput> | ControlCreateWithoutParentControlInput[] | ControlUncheckedCreateWithoutParentControlInput[]
    connectOrCreate?: ControlCreateOrConnectWithoutParentControlInput | ControlCreateOrConnectWithoutParentControlInput[]
    upsert?: ControlUpsertWithWhereUniqueWithoutParentControlInput | ControlUpsertWithWhereUniqueWithoutParentControlInput[]
    createMany?: ControlCreateManyParentControlInputEnvelope
    set?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    disconnect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    delete?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    connect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    update?: ControlUpdateWithWhereUniqueWithoutParentControlInput | ControlUpdateWithWhereUniqueWithoutParentControlInput[]
    updateMany?: ControlUpdateManyWithWhereWithoutParentControlInput | ControlUpdateManyWithWhereWithoutParentControlInput[]
    deleteMany?: ControlScalarWhereInput | ControlScalarWhereInput[]
  }

  export type ControlEvaluationUpdateManyWithoutControlNestedInput = {
    create?: XOR<ControlEvaluationCreateWithoutControlInput, ControlEvaluationUncheckedCreateWithoutControlInput> | ControlEvaluationCreateWithoutControlInput[] | ControlEvaluationUncheckedCreateWithoutControlInput[]
    connectOrCreate?: ControlEvaluationCreateOrConnectWithoutControlInput | ControlEvaluationCreateOrConnectWithoutControlInput[]
    upsert?: ControlEvaluationUpsertWithWhereUniqueWithoutControlInput | ControlEvaluationUpsertWithWhereUniqueWithoutControlInput[]
    createMany?: ControlEvaluationCreateManyControlInputEnvelope
    set?: ControlEvaluationWhereUniqueInput | ControlEvaluationWhereUniqueInput[]
    disconnect?: ControlEvaluationWhereUniqueInput | ControlEvaluationWhereUniqueInput[]
    delete?: ControlEvaluationWhereUniqueInput | ControlEvaluationWhereUniqueInput[]
    connect?: ControlEvaluationWhereUniqueInput | ControlEvaluationWhereUniqueInput[]
    update?: ControlEvaluationUpdateWithWhereUniqueWithoutControlInput | ControlEvaluationUpdateWithWhereUniqueWithoutControlInput[]
    updateMany?: ControlEvaluationUpdateManyWithWhereWithoutControlInput | ControlEvaluationUpdateManyWithWhereWithoutControlInput[]
    deleteMany?: ControlEvaluationScalarWhereInput | ControlEvaluationScalarWhereInput[]
  }

  export type SuggestionUpdateManyWithoutControlNestedInput = {
    create?: XOR<SuggestionCreateWithoutControlInput, SuggestionUncheckedCreateWithoutControlInput> | SuggestionCreateWithoutControlInput[] | SuggestionUncheckedCreateWithoutControlInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutControlInput | SuggestionCreateOrConnectWithoutControlInput[]
    upsert?: SuggestionUpsertWithWhereUniqueWithoutControlInput | SuggestionUpsertWithWhereUniqueWithoutControlInput[]
    createMany?: SuggestionCreateManyControlInputEnvelope
    set?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    disconnect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    delete?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    update?: SuggestionUpdateWithWhereUniqueWithoutControlInput | SuggestionUpdateWithWhereUniqueWithoutControlInput[]
    updateMany?: SuggestionUpdateManyWithWhereWithoutControlInput | SuggestionUpdateManyWithWhereWithoutControlInput[]
    deleteMany?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
  }

  export type ControlUncheckedUpdateManyWithoutParentControlNestedInput = {
    create?: XOR<ControlCreateWithoutParentControlInput, ControlUncheckedCreateWithoutParentControlInput> | ControlCreateWithoutParentControlInput[] | ControlUncheckedCreateWithoutParentControlInput[]
    connectOrCreate?: ControlCreateOrConnectWithoutParentControlInput | ControlCreateOrConnectWithoutParentControlInput[]
    upsert?: ControlUpsertWithWhereUniqueWithoutParentControlInput | ControlUpsertWithWhereUniqueWithoutParentControlInput[]
    createMany?: ControlCreateManyParentControlInputEnvelope
    set?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    disconnect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    delete?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    connect?: ControlWhereUniqueInput | ControlWhereUniqueInput[]
    update?: ControlUpdateWithWhereUniqueWithoutParentControlInput | ControlUpdateWithWhereUniqueWithoutParentControlInput[]
    updateMany?: ControlUpdateManyWithWhereWithoutParentControlInput | ControlUpdateManyWithWhereWithoutParentControlInput[]
    deleteMany?: ControlScalarWhereInput | ControlScalarWhereInput[]
  }

  export type ControlEvaluationUncheckedUpdateManyWithoutControlNestedInput = {
    create?: XOR<ControlEvaluationCreateWithoutControlInput, ControlEvaluationUncheckedCreateWithoutControlInput> | ControlEvaluationCreateWithoutControlInput[] | ControlEvaluationUncheckedCreateWithoutControlInput[]
    connectOrCreate?: ControlEvaluationCreateOrConnectWithoutControlInput | ControlEvaluationCreateOrConnectWithoutControlInput[]
    upsert?: ControlEvaluationUpsertWithWhereUniqueWithoutControlInput | ControlEvaluationUpsertWithWhereUniqueWithoutControlInput[]
    createMany?: ControlEvaluationCreateManyControlInputEnvelope
    set?: ControlEvaluationWhereUniqueInput | ControlEvaluationWhereUniqueInput[]
    disconnect?: ControlEvaluationWhereUniqueInput | ControlEvaluationWhereUniqueInput[]
    delete?: ControlEvaluationWhereUniqueInput | ControlEvaluationWhereUniqueInput[]
    connect?: ControlEvaluationWhereUniqueInput | ControlEvaluationWhereUniqueInput[]
    update?: ControlEvaluationUpdateWithWhereUniqueWithoutControlInput | ControlEvaluationUpdateWithWhereUniqueWithoutControlInput[]
    updateMany?: ControlEvaluationUpdateManyWithWhereWithoutControlInput | ControlEvaluationUpdateManyWithWhereWithoutControlInput[]
    deleteMany?: ControlEvaluationScalarWhereInput | ControlEvaluationScalarWhereInput[]
  }

  export type SuggestionUncheckedUpdateManyWithoutControlNestedInput = {
    create?: XOR<SuggestionCreateWithoutControlInput, SuggestionUncheckedCreateWithoutControlInput> | SuggestionCreateWithoutControlInput[] | SuggestionUncheckedCreateWithoutControlInput[]
    connectOrCreate?: SuggestionCreateOrConnectWithoutControlInput | SuggestionCreateOrConnectWithoutControlInput[]
    upsert?: SuggestionUpsertWithWhereUniqueWithoutControlInput | SuggestionUpsertWithWhereUniqueWithoutControlInput[]
    createMany?: SuggestionCreateManyControlInputEnvelope
    set?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    disconnect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    delete?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    connect?: SuggestionWhereUniqueInput | SuggestionWhereUniqueInput[]
    update?: SuggestionUpdateWithWhereUniqueWithoutControlInput | SuggestionUpdateWithWhereUniqueWithoutControlInput[]
    updateMany?: SuggestionUpdateManyWithWhereWithoutControlInput | SuggestionUpdateManyWithWhereWithoutControlInput[]
    deleteMany?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
  }

  export type ControlCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<ControlCreateWithoutEvaluationsInput, ControlUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: ControlCreateOrConnectWithoutEvaluationsInput
    connect?: ControlWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ControlUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<ControlCreateWithoutEvaluationsInput, ControlUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: ControlCreateOrConnectWithoutEvaluationsInput
    upsert?: ControlUpsertWithoutEvaluationsInput
    connect?: ControlWhereUniqueInput
    update?: XOR<XOR<ControlUpdateToOneWithWhereWithoutEvaluationsInput, ControlUpdateWithoutEvaluationsInput>, ControlUncheckedUpdateWithoutEvaluationsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectCreateNestedOneWithoutFactsInput = {
    create?: XOR<ProjectCreateWithoutFactsInput, ProjectUncheckedCreateWithoutFactsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFactsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutFactsNestedInput = {
    create?: XOR<ProjectCreateWithoutFactsInput, ProjectUncheckedCreateWithoutFactsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFactsInput
    upsert?: ProjectUpsertWithoutFactsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutFactsInput, ProjectUpdateWithoutFactsInput>, ProjectUncheckedUpdateWithoutFactsInput>
  }

  export type PolicySegmentCreateembeddingInput = {
    set: number[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PolicySegmentUpdateembeddingInput = {
    set?: number[]
    push?: number | number[]
  }

  export type EnumVcStateFieldUpdateOperationsInput = {
    set?: $Enums.VcState
  }

  export type ControlCreateNestedOneWithoutSuggestionsInput = {
    create?: XOR<ControlCreateWithoutSuggestionsInput, ControlUncheckedCreateWithoutSuggestionsInput>
    connectOrCreate?: ControlCreateOrConnectWithoutSuggestionsInput
    connect?: ControlWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutSuggestionsInput = {
    create?: XOR<ProjectCreateWithoutSuggestionsInput, ProjectUncheckedCreateWithoutSuggestionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSuggestionsInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumSuggestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.SuggestionType
  }

  export type EnumConfidenceFieldUpdateOperationsInput = {
    set?: $Enums.Confidence
  }

  export type EnumSuggestionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SuggestionStatus
  }

  export type ControlUpdateOneRequiredWithoutSuggestionsNestedInput = {
    create?: XOR<ControlCreateWithoutSuggestionsInput, ControlUncheckedCreateWithoutSuggestionsInput>
    connectOrCreate?: ControlCreateOrConnectWithoutSuggestionsInput
    upsert?: ControlUpsertWithoutSuggestionsInput
    connect?: ControlWhereUniqueInput
    update?: XOR<XOR<ControlUpdateToOneWithWhereWithoutSuggestionsInput, ControlUpdateWithoutSuggestionsInput>, ControlUncheckedUpdateWithoutSuggestionsInput>
  }

  export type ProjectUpdateOneRequiredWithoutSuggestionsNestedInput = {
    create?: XOR<ProjectCreateWithoutSuggestionsInput, ProjectUncheckedCreateWithoutSuggestionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSuggestionsInput
    upsert?: ProjectUpsertWithoutSuggestionsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSuggestionsInput, ProjectUpdateWithoutSuggestionsInput>, ProjectUncheckedUpdateWithoutSuggestionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumTierTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TierType | EnumTierTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TierType[] | ListEnumTierTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TierType[] | ListEnumTierTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTierTypeFilter<$PrismaModel> | $Enums.TierType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumTierTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TierType | EnumTierTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TierType[] | ListEnumTierTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TierType[] | ListEnumTierTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTierTypeWithAggregatesFilter<$PrismaModel> | $Enums.TierType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTierTypeFilter<$PrismaModel>
    _max?: NestedEnumTierTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCriticalityFilter<$PrismaModel = never> = {
    equals?: $Enums.Criticality | EnumCriticalityFieldRefInput<$PrismaModel>
    in?: $Enums.Criticality[] | ListEnumCriticalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Criticality[] | ListEnumCriticalityFieldRefInput<$PrismaModel>
    not?: NestedEnumCriticalityFilter<$PrismaModel> | $Enums.Criticality
  }

  export type NestedEnumControlStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ControlStatus | EnumControlStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ControlStatus[] | ListEnumControlStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ControlStatus[] | ListEnumControlStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumControlStatusFilter<$PrismaModel> | $Enums.ControlStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumCriticalityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Criticality | EnumCriticalityFieldRefInput<$PrismaModel>
    in?: $Enums.Criticality[] | ListEnumCriticalityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Criticality[] | ListEnumCriticalityFieldRefInput<$PrismaModel>
    not?: NestedEnumCriticalityWithAggregatesFilter<$PrismaModel> | $Enums.Criticality
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCriticalityFilter<$PrismaModel>
    _max?: NestedEnumCriticalityFilter<$PrismaModel>
  }

  export type NestedEnumControlStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ControlStatus | EnumControlStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ControlStatus[] | ListEnumControlStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ControlStatus[] | ListEnumControlStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumControlStatusWithAggregatesFilter<$PrismaModel> | $Enums.ControlStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumControlStatusFilter<$PrismaModel>
    _max?: NestedEnumControlStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumVcStateFilter<$PrismaModel = never> = {
    equals?: $Enums.VcState | EnumVcStateFieldRefInput<$PrismaModel>
    in?: $Enums.VcState[] | ListEnumVcStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.VcState[] | ListEnumVcStateFieldRefInput<$PrismaModel>
    not?: NestedEnumVcStateFilter<$PrismaModel> | $Enums.VcState
  }

  export type NestedEnumVcStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VcState | EnumVcStateFieldRefInput<$PrismaModel>
    in?: $Enums.VcState[] | ListEnumVcStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.VcState[] | ListEnumVcStateFieldRefInput<$PrismaModel>
    not?: NestedEnumVcStateWithAggregatesFilter<$PrismaModel> | $Enums.VcState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVcStateFilter<$PrismaModel>
    _max?: NestedEnumVcStateFilter<$PrismaModel>
  }

  export type NestedEnumSuggestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SuggestionType | EnumSuggestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SuggestionType[] | ListEnumSuggestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuggestionType[] | ListEnumSuggestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSuggestionTypeFilter<$PrismaModel> | $Enums.SuggestionType
  }

  export type NestedEnumConfidenceFilter<$PrismaModel = never> = {
    equals?: $Enums.Confidence | EnumConfidenceFieldRefInput<$PrismaModel>
    in?: $Enums.Confidence[] | ListEnumConfidenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Confidence[] | ListEnumConfidenceFieldRefInput<$PrismaModel>
    not?: NestedEnumConfidenceFilter<$PrismaModel> | $Enums.Confidence
  }

  export type NestedEnumSuggestionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SuggestionStatus | EnumSuggestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SuggestionStatus[] | ListEnumSuggestionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuggestionStatus[] | ListEnumSuggestionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSuggestionStatusFilter<$PrismaModel> | $Enums.SuggestionStatus
  }

  export type NestedEnumSuggestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SuggestionType | EnumSuggestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SuggestionType[] | ListEnumSuggestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuggestionType[] | ListEnumSuggestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSuggestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SuggestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSuggestionTypeFilter<$PrismaModel>
    _max?: NestedEnumSuggestionTypeFilter<$PrismaModel>
  }

  export type NestedEnumConfidenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Confidence | EnumConfidenceFieldRefInput<$PrismaModel>
    in?: $Enums.Confidence[] | ListEnumConfidenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Confidence[] | ListEnumConfidenceFieldRefInput<$PrismaModel>
    not?: NestedEnumConfidenceWithAggregatesFilter<$PrismaModel> | $Enums.Confidence
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConfidenceFilter<$PrismaModel>
    _max?: NestedEnumConfidenceFilter<$PrismaModel>
  }

  export type NestedEnumSuggestionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SuggestionStatus | EnumSuggestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SuggestionStatus[] | ListEnumSuggestionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SuggestionStatus[] | ListEnumSuggestionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSuggestionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SuggestionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSuggestionStatusFilter<$PrismaModel>
    _max?: NestedEnumSuggestionStatusFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutTenantInput = {
    id?: string
    name: string
    slug: string
    environment?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    controls?: ControlCreateNestedManyWithoutProjectInput
    facts?: FactCreateNestedManyWithoutProjectInput
    suggestions?: SuggestionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    slug: string
    environment?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    controls?: ControlUncheckedCreateNestedManyWithoutProjectInput
    facts?: FactUncheckedCreateNestedManyWithoutProjectInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTenantInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTenantInput, ProjectUncheckedCreateWithoutTenantInput>
  }

  export type ProjectCreateManyTenantInputEnvelope = {
    data: ProjectCreateManyTenantInput | ProjectCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTenantInput = {
    id?: string
    email: string
    name: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTenantInput = {
    id?: string
    email: string
    name: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserCreateManyTenantInputEnvelope = {
    data: UserCreateManyTenantInput | UserCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutTenantInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutTenantInput, ProjectUncheckedUpdateWithoutTenantInput>
    create: XOR<ProjectCreateWithoutTenantInput, ProjectUncheckedCreateWithoutTenantInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutTenantInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutTenantInput, ProjectUncheckedUpdateWithoutTenantInput>
  }

  export type ProjectUpdateManyWithWhereWithoutTenantInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutTenantInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    tenantId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    environment?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
  }

  export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTenantInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type TenantCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    tier?: $Enums.TierType
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    tier?: $Enums.TierType
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUsersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }

  export type TenantUpsertWithoutUsersInput = {
    update: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUsersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type TenantUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierTypeFieldUpdateOperationsInput | $Enums.TierType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierTypeFieldUpdateOperationsInput | $Enums.TierType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutProjectsInput = {
    id?: string
    name: string
    slug: string
    tier?: $Enums.TierType
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    slug: string
    tier?: $Enums.TierType
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutProjectsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutProjectsInput, TenantUncheckedCreateWithoutProjectsInput>
  }

  export type ControlCreateWithoutProjectInput = {
    id?: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    framework: FrameworkCreateNestedOneWithoutControlsInput
    parentControl?: ControlCreateNestedOneWithoutChildControlsInput
    childControls?: ControlCreateNestedManyWithoutParentControlInput
    evaluations?: ControlEvaluationCreateNestedManyWithoutControlInput
    suggestions?: SuggestionCreateNestedManyWithoutControlInput
  }

  export type ControlUncheckedCreateWithoutProjectInput = {
    id?: string
    frameworkId: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    parentControlId?: string | null
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childControls?: ControlUncheckedCreateNestedManyWithoutParentControlInput
    evaluations?: ControlEvaluationUncheckedCreateNestedManyWithoutControlInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutControlInput
  }

  export type ControlCreateOrConnectWithoutProjectInput = {
    where: ControlWhereUniqueInput
    create: XOR<ControlCreateWithoutProjectInput, ControlUncheckedCreateWithoutProjectInput>
  }

  export type ControlCreateManyProjectInputEnvelope = {
    data: ControlCreateManyProjectInput | ControlCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type FactCreateWithoutProjectInput = {
    id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    source: string
    sourceId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    collectedAt: Date | string
    expiresAt?: Date | string | null
  }

  export type FactUncheckedCreateWithoutProjectInput = {
    id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    source: string
    sourceId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    collectedAt: Date | string
    expiresAt?: Date | string | null
  }

  export type FactCreateOrConnectWithoutProjectInput = {
    where: FactWhereUniqueInput
    create: XOR<FactCreateWithoutProjectInput, FactUncheckedCreateWithoutProjectInput>
  }

  export type FactCreateManyProjectInputEnvelope = {
    data: FactCreateManyProjectInput | FactCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type SuggestionCreateWithoutProjectInput = {
    id?: string
    type: $Enums.SuggestionType
    diff: string
    targetPath: string
    confidence?: $Enums.Confidence
    status?: $Enums.SuggestionStatus
    appliedAt?: Date | string | null
    rejectedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    control: ControlCreateNestedOneWithoutSuggestionsInput
  }

  export type SuggestionUncheckedCreateWithoutProjectInput = {
    id?: string
    controlId: string
    type: $Enums.SuggestionType
    diff: string
    targetPath: string
    confidence?: $Enums.Confidence
    status?: $Enums.SuggestionStatus
    appliedAt?: Date | string | null
    rejectedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SuggestionCreateOrConnectWithoutProjectInput = {
    where: SuggestionWhereUniqueInput
    create: XOR<SuggestionCreateWithoutProjectInput, SuggestionUncheckedCreateWithoutProjectInput>
  }

  export type SuggestionCreateManyProjectInputEnvelope = {
    data: SuggestionCreateManyProjectInput | SuggestionCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutProjectsInput = {
    update: XOR<TenantUpdateWithoutProjectsInput, TenantUncheckedUpdateWithoutProjectsInput>
    create: XOR<TenantCreateWithoutProjectsInput, TenantUncheckedCreateWithoutProjectsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutProjectsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutProjectsInput, TenantUncheckedUpdateWithoutProjectsInput>
  }

  export type TenantUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierTypeFieldUpdateOperationsInput | $Enums.TierType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierTypeFieldUpdateOperationsInput | $Enums.TierType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type ControlUpsertWithWhereUniqueWithoutProjectInput = {
    where: ControlWhereUniqueInput
    update: XOR<ControlUpdateWithoutProjectInput, ControlUncheckedUpdateWithoutProjectInput>
    create: XOR<ControlCreateWithoutProjectInput, ControlUncheckedCreateWithoutProjectInput>
  }

  export type ControlUpdateWithWhereUniqueWithoutProjectInput = {
    where: ControlWhereUniqueInput
    data: XOR<ControlUpdateWithoutProjectInput, ControlUncheckedUpdateWithoutProjectInput>
  }

  export type ControlUpdateManyWithWhereWithoutProjectInput = {
    where: ControlScalarWhereInput
    data: XOR<ControlUpdateManyMutationInput, ControlUncheckedUpdateManyWithoutProjectInput>
  }

  export type ControlScalarWhereInput = {
    AND?: ControlScalarWhereInput | ControlScalarWhereInput[]
    OR?: ControlScalarWhereInput[]
    NOT?: ControlScalarWhereInput | ControlScalarWhereInput[]
    id?: StringFilter<"Control"> | string
    projectId?: StringFilter<"Control"> | string
    frameworkId?: StringFilter<"Control"> | string
    controlId?: StringFilter<"Control"> | string
    title?: StringFilter<"Control"> | string
    description?: StringFilter<"Control"> | string
    parameters?: JsonFilter<"Control">
    criticality?: EnumCriticalityFilter<"Control"> | $Enums.Criticality
    parentControlId?: StringNullableFilter<"Control"> | string | null
    currentStatus?: EnumControlStatusFilter<"Control"> | $Enums.ControlStatus
    lastEvaluatedAt?: DateTimeNullableFilter<"Control"> | Date | string | null
    createdAt?: DateTimeFilter<"Control"> | Date | string
    updatedAt?: DateTimeFilter<"Control"> | Date | string
  }

  export type FactUpsertWithWhereUniqueWithoutProjectInput = {
    where: FactWhereUniqueInput
    update: XOR<FactUpdateWithoutProjectInput, FactUncheckedUpdateWithoutProjectInput>
    create: XOR<FactCreateWithoutProjectInput, FactUncheckedCreateWithoutProjectInput>
  }

  export type FactUpdateWithWhereUniqueWithoutProjectInput = {
    where: FactWhereUniqueInput
    data: XOR<FactUpdateWithoutProjectInput, FactUncheckedUpdateWithoutProjectInput>
  }

  export type FactUpdateManyWithWhereWithoutProjectInput = {
    where: FactScalarWhereInput
    data: XOR<FactUpdateManyMutationInput, FactUncheckedUpdateManyWithoutProjectInput>
  }

  export type FactScalarWhereInput = {
    AND?: FactScalarWhereInput | FactScalarWhereInput[]
    OR?: FactScalarWhereInput[]
    NOT?: FactScalarWhereInput | FactScalarWhereInput[]
    id?: StringFilter<"Fact"> | string
    projectId?: StringFilter<"Fact"> | string
    key?: StringFilter<"Fact"> | string
    value?: JsonFilter<"Fact">
    source?: StringFilter<"Fact"> | string
    sourceId?: StringNullableFilter<"Fact"> | string | null
    metadata?: JsonNullableFilter<"Fact">
    collectedAt?: DateTimeFilter<"Fact"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Fact"> | Date | string | null
  }

  export type SuggestionUpsertWithWhereUniqueWithoutProjectInput = {
    where: SuggestionWhereUniqueInput
    update: XOR<SuggestionUpdateWithoutProjectInput, SuggestionUncheckedUpdateWithoutProjectInput>
    create: XOR<SuggestionCreateWithoutProjectInput, SuggestionUncheckedCreateWithoutProjectInput>
  }

  export type SuggestionUpdateWithWhereUniqueWithoutProjectInput = {
    where: SuggestionWhereUniqueInput
    data: XOR<SuggestionUpdateWithoutProjectInput, SuggestionUncheckedUpdateWithoutProjectInput>
  }

  export type SuggestionUpdateManyWithWhereWithoutProjectInput = {
    where: SuggestionScalarWhereInput
    data: XOR<SuggestionUpdateManyMutationInput, SuggestionUncheckedUpdateManyWithoutProjectInput>
  }

  export type SuggestionScalarWhereInput = {
    AND?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
    OR?: SuggestionScalarWhereInput[]
    NOT?: SuggestionScalarWhereInput | SuggestionScalarWhereInput[]
    id?: StringFilter<"Suggestion"> | string
    controlId?: StringFilter<"Suggestion"> | string
    projectId?: StringFilter<"Suggestion"> | string
    type?: EnumSuggestionTypeFilter<"Suggestion"> | $Enums.SuggestionType
    diff?: StringFilter<"Suggestion"> | string
    targetPath?: StringFilter<"Suggestion"> | string
    confidence?: EnumConfidenceFilter<"Suggestion"> | $Enums.Confidence
    status?: EnumSuggestionStatusFilter<"Suggestion"> | $Enums.SuggestionStatus
    appliedAt?: DateTimeNullableFilter<"Suggestion"> | Date | string | null
    rejectedAt?: DateTimeNullableFilter<"Suggestion"> | Date | string | null
    metadata?: JsonNullableFilter<"Suggestion">
    createdAt?: DateTimeFilter<"Suggestion"> | Date | string
  }

  export type ControlCreateWithoutFrameworkInput = {
    id?: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutControlsInput
    parentControl?: ControlCreateNestedOneWithoutChildControlsInput
    childControls?: ControlCreateNestedManyWithoutParentControlInput
    evaluations?: ControlEvaluationCreateNestedManyWithoutControlInput
    suggestions?: SuggestionCreateNestedManyWithoutControlInput
  }

  export type ControlUncheckedCreateWithoutFrameworkInput = {
    id?: string
    projectId: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    parentControlId?: string | null
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childControls?: ControlUncheckedCreateNestedManyWithoutParentControlInput
    evaluations?: ControlEvaluationUncheckedCreateNestedManyWithoutControlInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutControlInput
  }

  export type ControlCreateOrConnectWithoutFrameworkInput = {
    where: ControlWhereUniqueInput
    create: XOR<ControlCreateWithoutFrameworkInput, ControlUncheckedCreateWithoutFrameworkInput>
  }

  export type ControlCreateManyFrameworkInputEnvelope = {
    data: ControlCreateManyFrameworkInput | ControlCreateManyFrameworkInput[]
    skipDuplicates?: boolean
  }

  export type ControlUpsertWithWhereUniqueWithoutFrameworkInput = {
    where: ControlWhereUniqueInput
    update: XOR<ControlUpdateWithoutFrameworkInput, ControlUncheckedUpdateWithoutFrameworkInput>
    create: XOR<ControlCreateWithoutFrameworkInput, ControlUncheckedCreateWithoutFrameworkInput>
  }

  export type ControlUpdateWithWhereUniqueWithoutFrameworkInput = {
    where: ControlWhereUniqueInput
    data: XOR<ControlUpdateWithoutFrameworkInput, ControlUncheckedUpdateWithoutFrameworkInput>
  }

  export type ControlUpdateManyWithWhereWithoutFrameworkInput = {
    where: ControlScalarWhereInput
    data: XOR<ControlUpdateManyMutationInput, ControlUncheckedUpdateManyWithoutFrameworkInput>
  }

  export type ProjectCreateWithoutControlsInput = {
    id?: string
    name: string
    slug: string
    environment?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutProjectsInput
    facts?: FactCreateNestedManyWithoutProjectInput
    suggestions?: SuggestionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutControlsInput = {
    id?: string
    tenantId: string
    name: string
    slug: string
    environment?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    facts?: FactUncheckedCreateNestedManyWithoutProjectInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutControlsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutControlsInput, ProjectUncheckedCreateWithoutControlsInput>
  }

  export type FrameworkCreateWithoutControlsInput = {
    id?: string
    name: string
    slug: string
    catalogUrl?: string | null
    version: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FrameworkUncheckedCreateWithoutControlsInput = {
    id?: string
    name: string
    slug: string
    catalogUrl?: string | null
    version: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FrameworkCreateOrConnectWithoutControlsInput = {
    where: FrameworkWhereUniqueInput
    create: XOR<FrameworkCreateWithoutControlsInput, FrameworkUncheckedCreateWithoutControlsInput>
  }

  export type ControlCreateWithoutChildControlsInput = {
    id?: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutControlsInput
    framework: FrameworkCreateNestedOneWithoutControlsInput
    parentControl?: ControlCreateNestedOneWithoutChildControlsInput
    evaluations?: ControlEvaluationCreateNestedManyWithoutControlInput
    suggestions?: SuggestionCreateNestedManyWithoutControlInput
  }

  export type ControlUncheckedCreateWithoutChildControlsInput = {
    id?: string
    projectId: string
    frameworkId: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    parentControlId?: string | null
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluations?: ControlEvaluationUncheckedCreateNestedManyWithoutControlInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutControlInput
  }

  export type ControlCreateOrConnectWithoutChildControlsInput = {
    where: ControlWhereUniqueInput
    create: XOR<ControlCreateWithoutChildControlsInput, ControlUncheckedCreateWithoutChildControlsInput>
  }

  export type ControlCreateWithoutParentControlInput = {
    id?: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutControlsInput
    framework: FrameworkCreateNestedOneWithoutControlsInput
    childControls?: ControlCreateNestedManyWithoutParentControlInput
    evaluations?: ControlEvaluationCreateNestedManyWithoutControlInput
    suggestions?: SuggestionCreateNestedManyWithoutControlInput
  }

  export type ControlUncheckedCreateWithoutParentControlInput = {
    id?: string
    projectId: string
    frameworkId: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childControls?: ControlUncheckedCreateNestedManyWithoutParentControlInput
    evaluations?: ControlEvaluationUncheckedCreateNestedManyWithoutControlInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutControlInput
  }

  export type ControlCreateOrConnectWithoutParentControlInput = {
    where: ControlWhereUniqueInput
    create: XOR<ControlCreateWithoutParentControlInput, ControlUncheckedCreateWithoutParentControlInput>
  }

  export type ControlCreateManyParentControlInputEnvelope = {
    data: ControlCreateManyParentControlInput | ControlCreateManyParentControlInput[]
    skipDuplicates?: boolean
  }

  export type ControlEvaluationCreateWithoutControlInput = {
    id?: string
    projectId: string
    runId: string
    status: $Enums.ControlStatus
    rationale: string
    evidenceRefs: JsonNullValueInput | InputJsonValue
    factsHash: string
    rulesetHash: string
    rulesetVersion: string
    nlpScore?: number | null
    riskScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ControlEvaluationUncheckedCreateWithoutControlInput = {
    id?: string
    projectId: string
    runId: string
    status: $Enums.ControlStatus
    rationale: string
    evidenceRefs: JsonNullValueInput | InputJsonValue
    factsHash: string
    rulesetHash: string
    rulesetVersion: string
    nlpScore?: number | null
    riskScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ControlEvaluationCreateOrConnectWithoutControlInput = {
    where: ControlEvaluationWhereUniqueInput
    create: XOR<ControlEvaluationCreateWithoutControlInput, ControlEvaluationUncheckedCreateWithoutControlInput>
  }

  export type ControlEvaluationCreateManyControlInputEnvelope = {
    data: ControlEvaluationCreateManyControlInput | ControlEvaluationCreateManyControlInput[]
    skipDuplicates?: boolean
  }

  export type SuggestionCreateWithoutControlInput = {
    id?: string
    type: $Enums.SuggestionType
    diff: string
    targetPath: string
    confidence?: $Enums.Confidence
    status?: $Enums.SuggestionStatus
    appliedAt?: Date | string | null
    rejectedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutSuggestionsInput
  }

  export type SuggestionUncheckedCreateWithoutControlInput = {
    id?: string
    projectId: string
    type: $Enums.SuggestionType
    diff: string
    targetPath: string
    confidence?: $Enums.Confidence
    status?: $Enums.SuggestionStatus
    appliedAt?: Date | string | null
    rejectedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SuggestionCreateOrConnectWithoutControlInput = {
    where: SuggestionWhereUniqueInput
    create: XOR<SuggestionCreateWithoutControlInput, SuggestionUncheckedCreateWithoutControlInput>
  }

  export type SuggestionCreateManyControlInputEnvelope = {
    data: SuggestionCreateManyControlInput | SuggestionCreateManyControlInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutControlsInput = {
    update: XOR<ProjectUpdateWithoutControlsInput, ProjectUncheckedUpdateWithoutControlsInput>
    create: XOR<ProjectCreateWithoutControlsInput, ProjectUncheckedCreateWithoutControlsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutControlsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutControlsInput, ProjectUncheckedUpdateWithoutControlsInput>
  }

  export type ProjectUpdateWithoutControlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutProjectsNestedInput
    facts?: FactUpdateManyWithoutProjectNestedInput
    suggestions?: SuggestionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutControlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facts?: FactUncheckedUpdateManyWithoutProjectNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type FrameworkUpsertWithoutControlsInput = {
    update: XOR<FrameworkUpdateWithoutControlsInput, FrameworkUncheckedUpdateWithoutControlsInput>
    create: XOR<FrameworkCreateWithoutControlsInput, FrameworkUncheckedCreateWithoutControlsInput>
    where?: FrameworkWhereInput
  }

  export type FrameworkUpdateToOneWithWhereWithoutControlsInput = {
    where?: FrameworkWhereInput
    data: XOR<FrameworkUpdateWithoutControlsInput, FrameworkUncheckedUpdateWithoutControlsInput>
  }

  export type FrameworkUpdateWithoutControlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    catalogUrl?: NullableStringFieldUpdateOperationsInput | string | null
    version?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrameworkUncheckedUpdateWithoutControlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    catalogUrl?: NullableStringFieldUpdateOperationsInput | string | null
    version?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControlUpsertWithoutChildControlsInput = {
    update: XOR<ControlUpdateWithoutChildControlsInput, ControlUncheckedUpdateWithoutChildControlsInput>
    create: XOR<ControlCreateWithoutChildControlsInput, ControlUncheckedCreateWithoutChildControlsInput>
    where?: ControlWhereInput
  }

  export type ControlUpdateToOneWithWhereWithoutChildControlsInput = {
    where?: ControlWhereInput
    data: XOR<ControlUpdateWithoutChildControlsInput, ControlUncheckedUpdateWithoutChildControlsInput>
  }

  export type ControlUpdateWithoutChildControlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutControlsNestedInput
    framework?: FrameworkUpdateOneRequiredWithoutControlsNestedInput
    parentControl?: ControlUpdateOneWithoutChildControlsNestedInput
    evaluations?: ControlEvaluationUpdateManyWithoutControlNestedInput
    suggestions?: SuggestionUpdateManyWithoutControlNestedInput
  }

  export type ControlUncheckedUpdateWithoutChildControlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    frameworkId?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    parentControlId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: ControlEvaluationUncheckedUpdateManyWithoutControlNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutControlNestedInput
  }

  export type ControlUpsertWithWhereUniqueWithoutParentControlInput = {
    where: ControlWhereUniqueInput
    update: XOR<ControlUpdateWithoutParentControlInput, ControlUncheckedUpdateWithoutParentControlInput>
    create: XOR<ControlCreateWithoutParentControlInput, ControlUncheckedCreateWithoutParentControlInput>
  }

  export type ControlUpdateWithWhereUniqueWithoutParentControlInput = {
    where: ControlWhereUniqueInput
    data: XOR<ControlUpdateWithoutParentControlInput, ControlUncheckedUpdateWithoutParentControlInput>
  }

  export type ControlUpdateManyWithWhereWithoutParentControlInput = {
    where: ControlScalarWhereInput
    data: XOR<ControlUpdateManyMutationInput, ControlUncheckedUpdateManyWithoutParentControlInput>
  }

  export type ControlEvaluationUpsertWithWhereUniqueWithoutControlInput = {
    where: ControlEvaluationWhereUniqueInput
    update: XOR<ControlEvaluationUpdateWithoutControlInput, ControlEvaluationUncheckedUpdateWithoutControlInput>
    create: XOR<ControlEvaluationCreateWithoutControlInput, ControlEvaluationUncheckedCreateWithoutControlInput>
  }

  export type ControlEvaluationUpdateWithWhereUniqueWithoutControlInput = {
    where: ControlEvaluationWhereUniqueInput
    data: XOR<ControlEvaluationUpdateWithoutControlInput, ControlEvaluationUncheckedUpdateWithoutControlInput>
  }

  export type ControlEvaluationUpdateManyWithWhereWithoutControlInput = {
    where: ControlEvaluationScalarWhereInput
    data: XOR<ControlEvaluationUpdateManyMutationInput, ControlEvaluationUncheckedUpdateManyWithoutControlInput>
  }

  export type ControlEvaluationScalarWhereInput = {
    AND?: ControlEvaluationScalarWhereInput | ControlEvaluationScalarWhereInput[]
    OR?: ControlEvaluationScalarWhereInput[]
    NOT?: ControlEvaluationScalarWhereInput | ControlEvaluationScalarWhereInput[]
    id?: StringFilter<"ControlEvaluation"> | string
    controlId?: StringFilter<"ControlEvaluation"> | string
    projectId?: StringFilter<"ControlEvaluation"> | string
    runId?: StringFilter<"ControlEvaluation"> | string
    status?: EnumControlStatusFilter<"ControlEvaluation"> | $Enums.ControlStatus
    rationale?: StringFilter<"ControlEvaluation"> | string
    evidenceRefs?: JsonFilter<"ControlEvaluation">
    factsHash?: StringFilter<"ControlEvaluation"> | string
    rulesetHash?: StringFilter<"ControlEvaluation"> | string
    rulesetVersion?: StringFilter<"ControlEvaluation"> | string
    nlpScore?: FloatNullableFilter<"ControlEvaluation"> | number | null
    riskScore?: FloatNullableFilter<"ControlEvaluation"> | number | null
    createdAt?: DateTimeFilter<"ControlEvaluation"> | Date | string
    updatedAt?: DateTimeFilter<"ControlEvaluation"> | Date | string
  }

  export type SuggestionUpsertWithWhereUniqueWithoutControlInput = {
    where: SuggestionWhereUniqueInput
    update: XOR<SuggestionUpdateWithoutControlInput, SuggestionUncheckedUpdateWithoutControlInput>
    create: XOR<SuggestionCreateWithoutControlInput, SuggestionUncheckedCreateWithoutControlInput>
  }

  export type SuggestionUpdateWithWhereUniqueWithoutControlInput = {
    where: SuggestionWhereUniqueInput
    data: XOR<SuggestionUpdateWithoutControlInput, SuggestionUncheckedUpdateWithoutControlInput>
  }

  export type SuggestionUpdateManyWithWhereWithoutControlInput = {
    where: SuggestionScalarWhereInput
    data: XOR<SuggestionUpdateManyMutationInput, SuggestionUncheckedUpdateManyWithoutControlInput>
  }

  export type ControlCreateWithoutEvaluationsInput = {
    id?: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutControlsInput
    framework: FrameworkCreateNestedOneWithoutControlsInput
    parentControl?: ControlCreateNestedOneWithoutChildControlsInput
    childControls?: ControlCreateNestedManyWithoutParentControlInput
    suggestions?: SuggestionCreateNestedManyWithoutControlInput
  }

  export type ControlUncheckedCreateWithoutEvaluationsInput = {
    id?: string
    projectId: string
    frameworkId: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    parentControlId?: string | null
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childControls?: ControlUncheckedCreateNestedManyWithoutParentControlInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutControlInput
  }

  export type ControlCreateOrConnectWithoutEvaluationsInput = {
    where: ControlWhereUniqueInput
    create: XOR<ControlCreateWithoutEvaluationsInput, ControlUncheckedCreateWithoutEvaluationsInput>
  }

  export type ControlUpsertWithoutEvaluationsInput = {
    update: XOR<ControlUpdateWithoutEvaluationsInput, ControlUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<ControlCreateWithoutEvaluationsInput, ControlUncheckedCreateWithoutEvaluationsInput>
    where?: ControlWhereInput
  }

  export type ControlUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: ControlWhereInput
    data: XOR<ControlUpdateWithoutEvaluationsInput, ControlUncheckedUpdateWithoutEvaluationsInput>
  }

  export type ControlUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutControlsNestedInput
    framework?: FrameworkUpdateOneRequiredWithoutControlsNestedInput
    parentControl?: ControlUpdateOneWithoutChildControlsNestedInput
    childControls?: ControlUpdateManyWithoutParentControlNestedInput
    suggestions?: SuggestionUpdateManyWithoutControlNestedInput
  }

  export type ControlUncheckedUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    frameworkId?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    parentControlId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childControls?: ControlUncheckedUpdateManyWithoutParentControlNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutControlNestedInput
  }

  export type ProjectCreateWithoutFactsInput = {
    id?: string
    name: string
    slug: string
    environment?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutProjectsInput
    controls?: ControlCreateNestedManyWithoutProjectInput
    suggestions?: SuggestionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutFactsInput = {
    id?: string
    tenantId: string
    name: string
    slug: string
    environment?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    controls?: ControlUncheckedCreateNestedManyWithoutProjectInput
    suggestions?: SuggestionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutFactsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutFactsInput, ProjectUncheckedCreateWithoutFactsInput>
  }

  export type ProjectUpsertWithoutFactsInput = {
    update: XOR<ProjectUpdateWithoutFactsInput, ProjectUncheckedUpdateWithoutFactsInput>
    create: XOR<ProjectCreateWithoutFactsInput, ProjectUncheckedCreateWithoutFactsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutFactsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutFactsInput, ProjectUncheckedUpdateWithoutFactsInput>
  }

  export type ProjectUpdateWithoutFactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutProjectsNestedInput
    controls?: ControlUpdateManyWithoutProjectNestedInput
    suggestions?: SuggestionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutFactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controls?: ControlUncheckedUpdateManyWithoutProjectNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ControlCreateWithoutSuggestionsInput = {
    id?: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutControlsInput
    framework: FrameworkCreateNestedOneWithoutControlsInput
    parentControl?: ControlCreateNestedOneWithoutChildControlsInput
    childControls?: ControlCreateNestedManyWithoutParentControlInput
    evaluations?: ControlEvaluationCreateNestedManyWithoutControlInput
  }

  export type ControlUncheckedCreateWithoutSuggestionsInput = {
    id?: string
    projectId: string
    frameworkId: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    parentControlId?: string | null
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    childControls?: ControlUncheckedCreateNestedManyWithoutParentControlInput
    evaluations?: ControlEvaluationUncheckedCreateNestedManyWithoutControlInput
  }

  export type ControlCreateOrConnectWithoutSuggestionsInput = {
    where: ControlWhereUniqueInput
    create: XOR<ControlCreateWithoutSuggestionsInput, ControlUncheckedCreateWithoutSuggestionsInput>
  }

  export type ProjectCreateWithoutSuggestionsInput = {
    id?: string
    name: string
    slug: string
    environment?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutProjectsInput
    controls?: ControlCreateNestedManyWithoutProjectInput
    facts?: FactCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSuggestionsInput = {
    id?: string
    tenantId: string
    name: string
    slug: string
    environment?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    controls?: ControlUncheckedCreateNestedManyWithoutProjectInput
    facts?: FactUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSuggestionsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSuggestionsInput, ProjectUncheckedCreateWithoutSuggestionsInput>
  }

  export type ControlUpsertWithoutSuggestionsInput = {
    update: XOR<ControlUpdateWithoutSuggestionsInput, ControlUncheckedUpdateWithoutSuggestionsInput>
    create: XOR<ControlCreateWithoutSuggestionsInput, ControlUncheckedCreateWithoutSuggestionsInput>
    where?: ControlWhereInput
  }

  export type ControlUpdateToOneWithWhereWithoutSuggestionsInput = {
    where?: ControlWhereInput
    data: XOR<ControlUpdateWithoutSuggestionsInput, ControlUncheckedUpdateWithoutSuggestionsInput>
  }

  export type ControlUpdateWithoutSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutControlsNestedInput
    framework?: FrameworkUpdateOneRequiredWithoutControlsNestedInput
    parentControl?: ControlUpdateOneWithoutChildControlsNestedInput
    childControls?: ControlUpdateManyWithoutParentControlNestedInput
    evaluations?: ControlEvaluationUpdateManyWithoutControlNestedInput
  }

  export type ControlUncheckedUpdateWithoutSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    frameworkId?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    parentControlId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childControls?: ControlUncheckedUpdateManyWithoutParentControlNestedInput
    evaluations?: ControlEvaluationUncheckedUpdateManyWithoutControlNestedInput
  }

  export type ProjectUpsertWithoutSuggestionsInput = {
    update: XOR<ProjectUpdateWithoutSuggestionsInput, ProjectUncheckedUpdateWithoutSuggestionsInput>
    create: XOR<ProjectCreateWithoutSuggestionsInput, ProjectUncheckedCreateWithoutSuggestionsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSuggestionsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSuggestionsInput, ProjectUncheckedUpdateWithoutSuggestionsInput>
  }

  export type ProjectUpdateWithoutSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutProjectsNestedInput
    controls?: ControlUpdateManyWithoutProjectNestedInput
    facts?: FactUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSuggestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controls?: ControlUncheckedUpdateManyWithoutProjectNestedInput
    facts?: FactUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyTenantInput = {
    id?: string
    name: string
    slug: string
    environment?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyTenantInput = {
    id?: string
    email: string
    name: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controls?: ControlUpdateManyWithoutProjectNestedInput
    facts?: FactUpdateManyWithoutProjectNestedInput
    suggestions?: SuggestionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    controls?: ControlUncheckedUpdateManyWithoutProjectNestedInput
    facts?: FactUncheckedUpdateManyWithoutProjectNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControlCreateManyProjectInput = {
    id?: string
    frameworkId: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    parentControlId?: string | null
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FactCreateManyProjectInput = {
    id?: string
    key: string
    value: JsonNullValueInput | InputJsonValue
    source: string
    sourceId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    collectedAt: Date | string
    expiresAt?: Date | string | null
  }

  export type SuggestionCreateManyProjectInput = {
    id?: string
    controlId: string
    type: $Enums.SuggestionType
    diff: string
    targetPath: string
    confidence?: $Enums.Confidence
    status?: $Enums.SuggestionStatus
    appliedAt?: Date | string | null
    rejectedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ControlUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    framework?: FrameworkUpdateOneRequiredWithoutControlsNestedInput
    parentControl?: ControlUpdateOneWithoutChildControlsNestedInput
    childControls?: ControlUpdateManyWithoutParentControlNestedInput
    evaluations?: ControlEvaluationUpdateManyWithoutControlNestedInput
    suggestions?: SuggestionUpdateManyWithoutControlNestedInput
  }

  export type ControlUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    frameworkId?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    parentControlId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childControls?: ControlUncheckedUpdateManyWithoutParentControlNestedInput
    evaluations?: ControlEvaluationUncheckedUpdateManyWithoutControlNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutControlNestedInput
  }

  export type ControlUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    frameworkId?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    parentControlId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FactUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FactUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FactUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    collectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuggestionUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSuggestionTypeFieldUpdateOperationsInput | $Enums.SuggestionType
    diff?: StringFieldUpdateOperationsInput | string
    targetPath?: StringFieldUpdateOperationsInput | string
    confidence?: EnumConfidenceFieldUpdateOperationsInput | $Enums.Confidence
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    control?: ControlUpdateOneRequiredWithoutSuggestionsNestedInput
  }

  export type SuggestionUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    type?: EnumSuggestionTypeFieldUpdateOperationsInput | $Enums.SuggestionType
    diff?: StringFieldUpdateOperationsInput | string
    targetPath?: StringFieldUpdateOperationsInput | string
    confidence?: EnumConfidenceFieldUpdateOperationsInput | $Enums.Confidence
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    type?: EnumSuggestionTypeFieldUpdateOperationsInput | $Enums.SuggestionType
    diff?: StringFieldUpdateOperationsInput | string
    targetPath?: StringFieldUpdateOperationsInput | string
    confidence?: EnumConfidenceFieldUpdateOperationsInput | $Enums.Confidence
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControlCreateManyFrameworkInput = {
    id?: string
    projectId: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    parentControlId?: string | null
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ControlUpdateWithoutFrameworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutControlsNestedInput
    parentControl?: ControlUpdateOneWithoutChildControlsNestedInput
    childControls?: ControlUpdateManyWithoutParentControlNestedInput
    evaluations?: ControlEvaluationUpdateManyWithoutControlNestedInput
    suggestions?: SuggestionUpdateManyWithoutControlNestedInput
  }

  export type ControlUncheckedUpdateWithoutFrameworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    parentControlId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childControls?: ControlUncheckedUpdateManyWithoutParentControlNestedInput
    evaluations?: ControlEvaluationUncheckedUpdateManyWithoutControlNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutControlNestedInput
  }

  export type ControlUncheckedUpdateManyWithoutFrameworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    parentControlId?: NullableStringFieldUpdateOperationsInput | string | null
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControlCreateManyParentControlInput = {
    id?: string
    projectId: string
    frameworkId: string
    controlId: string
    title: string
    description: string
    parameters: JsonNullValueInput | InputJsonValue
    criticality?: $Enums.Criticality
    currentStatus?: $Enums.ControlStatus
    lastEvaluatedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ControlEvaluationCreateManyControlInput = {
    id?: string
    projectId: string
    runId: string
    status: $Enums.ControlStatus
    rationale: string
    evidenceRefs: JsonNullValueInput | InputJsonValue
    factsHash: string
    rulesetHash: string
    rulesetVersion: string
    nlpScore?: number | null
    riskScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuggestionCreateManyControlInput = {
    id?: string
    projectId: string
    type: $Enums.SuggestionType
    diff: string
    targetPath: string
    confidence?: $Enums.Confidence
    status?: $Enums.SuggestionStatus
    appliedAt?: Date | string | null
    rejectedAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ControlUpdateWithoutParentControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutControlsNestedInput
    framework?: FrameworkUpdateOneRequiredWithoutControlsNestedInput
    childControls?: ControlUpdateManyWithoutParentControlNestedInput
    evaluations?: ControlEvaluationUpdateManyWithoutControlNestedInput
    suggestions?: SuggestionUpdateManyWithoutControlNestedInput
  }

  export type ControlUncheckedUpdateWithoutParentControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    frameworkId?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childControls?: ControlUncheckedUpdateManyWithoutParentControlNestedInput
    evaluations?: ControlEvaluationUncheckedUpdateManyWithoutControlNestedInput
    suggestions?: SuggestionUncheckedUpdateManyWithoutControlNestedInput
  }

  export type ControlUncheckedUpdateManyWithoutParentControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    frameworkId?: StringFieldUpdateOperationsInput | string
    controlId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    criticality?: EnumCriticalityFieldUpdateOperationsInput | $Enums.Criticality
    currentStatus?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    lastEvaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControlEvaluationUpdateWithoutControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    rationale?: StringFieldUpdateOperationsInput | string
    evidenceRefs?: JsonNullValueInput | InputJsonValue
    factsHash?: StringFieldUpdateOperationsInput | string
    rulesetHash?: StringFieldUpdateOperationsInput | string
    rulesetVersion?: StringFieldUpdateOperationsInput | string
    nlpScore?: NullableFloatFieldUpdateOperationsInput | number | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControlEvaluationUncheckedUpdateWithoutControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    rationale?: StringFieldUpdateOperationsInput | string
    evidenceRefs?: JsonNullValueInput | InputJsonValue
    factsHash?: StringFieldUpdateOperationsInput | string
    rulesetHash?: StringFieldUpdateOperationsInput | string
    rulesetVersion?: StringFieldUpdateOperationsInput | string
    nlpScore?: NullableFloatFieldUpdateOperationsInput | number | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ControlEvaluationUncheckedUpdateManyWithoutControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: EnumControlStatusFieldUpdateOperationsInput | $Enums.ControlStatus
    rationale?: StringFieldUpdateOperationsInput | string
    evidenceRefs?: JsonNullValueInput | InputJsonValue
    factsHash?: StringFieldUpdateOperationsInput | string
    rulesetHash?: StringFieldUpdateOperationsInput | string
    rulesetVersion?: StringFieldUpdateOperationsInput | string
    nlpScore?: NullableFloatFieldUpdateOperationsInput | number | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionUpdateWithoutControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSuggestionTypeFieldUpdateOperationsInput | $Enums.SuggestionType
    diff?: StringFieldUpdateOperationsInput | string
    targetPath?: StringFieldUpdateOperationsInput | string
    confidence?: EnumConfidenceFieldUpdateOperationsInput | $Enums.Confidence
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSuggestionsNestedInput
  }

  export type SuggestionUncheckedUpdateWithoutControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumSuggestionTypeFieldUpdateOperationsInput | $Enums.SuggestionType
    diff?: StringFieldUpdateOperationsInput | string
    targetPath?: StringFieldUpdateOperationsInput | string
    confidence?: EnumConfidenceFieldUpdateOperationsInput | $Enums.Confidence
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuggestionUncheckedUpdateManyWithoutControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumSuggestionTypeFieldUpdateOperationsInput | $Enums.SuggestionType
    diff?: StringFieldUpdateOperationsInput | string
    targetPath?: StringFieldUpdateOperationsInput | string
    confidence?: EnumConfidenceFieldUpdateOperationsInput | $Enums.Confidence
    status?: EnumSuggestionStatusFieldUpdateOperationsInput | $Enums.SuggestionStatus
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TenantCountOutputTypeDefaultArgs instead
     */
    export type TenantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FrameworkCountOutputTypeDefaultArgs instead
     */
    export type FrameworkCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FrameworkCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ControlCountOutputTypeDefaultArgs instead
     */
    export type ControlCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ControlCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TenantDefaultArgs instead
     */
    export type TenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FrameworkDefaultArgs instead
     */
    export type FrameworkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FrameworkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ControlDefaultArgs instead
     */
    export type ControlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ControlDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ControlEvaluationDefaultArgs instead
     */
    export type ControlEvaluationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ControlEvaluationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EvaluationRunDefaultArgs instead
     */
    export type EvaluationRunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EvaluationRunDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FactDefaultArgs instead
     */
    export type FactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PolicySegmentDefaultArgs instead
     */
    export type PolicySegmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PolicySegmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VcStatusDefaultArgs instead
     */
    export type VcStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VcStatusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SuggestionDefaultArgs instead
     */
    export type SuggestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SuggestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}