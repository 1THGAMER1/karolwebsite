
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
 * Model Produkte
 * 
 */
export type Produkte = $Result.DefaultSelection<Prisma.$ProduktePayload>
/**
 * Model Warenkorb
 * 
 */
export type Warenkorb = $Result.DefaultSelection<Prisma.$WarenkorbPayload>
/**
 * Model Bestellung
 * 
 */
export type Bestellung = $Result.DefaultSelection<Prisma.$BestellungPayload>
/**
 * Model Bestellposten
 * 
 */
export type Bestellposten = $Result.DefaultSelection<Prisma.$BestellpostenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Produktes
 * const produktes = await prisma.produkte.findMany()
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
   * // Fetch zero or more Produktes
   * const produktes = await prisma.produkte.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.produkte`: Exposes CRUD operations for the **Produkte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produktes
    * const produktes = await prisma.produkte.findMany()
    * ```
    */
  get produkte(): Prisma.ProdukteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warenkorb`: Exposes CRUD operations for the **Warenkorb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warenkorbs
    * const warenkorbs = await prisma.warenkorb.findMany()
    * ```
    */
  get warenkorb(): Prisma.WarenkorbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bestellung`: Exposes CRUD operations for the **Bestellung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bestellungs
    * const bestellungs = await prisma.bestellung.findMany()
    * ```
    */
  get bestellung(): Prisma.BestellungDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bestellposten`: Exposes CRUD operations for the **Bestellposten** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bestellpostens
    * const bestellpostens = await prisma.bestellposten.findMany()
    * ```
    */
  get bestellposten(): Prisma.BestellpostenDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Produkte: 'Produkte',
    Warenkorb: 'Warenkorb',
    Bestellung: 'Bestellung',
    Bestellposten: 'Bestellposten'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "produkte" | "warenkorb" | "bestellung" | "bestellposten"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Produkte: {
        payload: Prisma.$ProduktePayload<ExtArgs>
        fields: Prisma.ProdukteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdukteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduktePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdukteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduktePayload>
          }
          findFirst: {
            args: Prisma.ProdukteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduktePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdukteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduktePayload>
          }
          findMany: {
            args: Prisma.ProdukteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduktePayload>[]
          }
          create: {
            args: Prisma.ProdukteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduktePayload>
          }
          createMany: {
            args: Prisma.ProdukteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdukteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduktePayload>[]
          }
          delete: {
            args: Prisma.ProdukteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduktePayload>
          }
          update: {
            args: Prisma.ProdukteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduktePayload>
          }
          deleteMany: {
            args: Prisma.ProdukteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdukteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdukteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduktePayload>[]
          }
          upsert: {
            args: Prisma.ProdukteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduktePayload>
          }
          aggregate: {
            args: Prisma.ProdukteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProdukte>
          }
          groupBy: {
            args: Prisma.ProdukteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdukteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdukteCountArgs<ExtArgs>
            result: $Utils.Optional<ProdukteCountAggregateOutputType> | number
          }
        }
      }
      Warenkorb: {
        payload: Prisma.$WarenkorbPayload<ExtArgs>
        fields: Prisma.WarenkorbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarenkorbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarenkorbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarenkorbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarenkorbPayload>
          }
          findFirst: {
            args: Prisma.WarenkorbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarenkorbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarenkorbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarenkorbPayload>
          }
          findMany: {
            args: Prisma.WarenkorbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarenkorbPayload>[]
          }
          create: {
            args: Prisma.WarenkorbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarenkorbPayload>
          }
          createMany: {
            args: Prisma.WarenkorbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarenkorbCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarenkorbPayload>[]
          }
          delete: {
            args: Prisma.WarenkorbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarenkorbPayload>
          }
          update: {
            args: Prisma.WarenkorbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarenkorbPayload>
          }
          deleteMany: {
            args: Prisma.WarenkorbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarenkorbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarenkorbUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarenkorbPayload>[]
          }
          upsert: {
            args: Prisma.WarenkorbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarenkorbPayload>
          }
          aggregate: {
            args: Prisma.WarenkorbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarenkorb>
          }
          groupBy: {
            args: Prisma.WarenkorbGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarenkorbGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarenkorbCountArgs<ExtArgs>
            result: $Utils.Optional<WarenkorbCountAggregateOutputType> | number
          }
        }
      }
      Bestellung: {
        payload: Prisma.$BestellungPayload<ExtArgs>
        fields: Prisma.BestellungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BestellungFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BestellungFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellungPayload>
          }
          findFirst: {
            args: Prisma.BestellungFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BestellungFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellungPayload>
          }
          findMany: {
            args: Prisma.BestellungFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellungPayload>[]
          }
          create: {
            args: Prisma.BestellungCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellungPayload>
          }
          createMany: {
            args: Prisma.BestellungCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BestellungCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellungPayload>[]
          }
          delete: {
            args: Prisma.BestellungDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellungPayload>
          }
          update: {
            args: Prisma.BestellungUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellungPayload>
          }
          deleteMany: {
            args: Prisma.BestellungDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BestellungUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BestellungUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellungPayload>[]
          }
          upsert: {
            args: Prisma.BestellungUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellungPayload>
          }
          aggregate: {
            args: Prisma.BestellungAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBestellung>
          }
          groupBy: {
            args: Prisma.BestellungGroupByArgs<ExtArgs>
            result: $Utils.Optional<BestellungGroupByOutputType>[]
          }
          count: {
            args: Prisma.BestellungCountArgs<ExtArgs>
            result: $Utils.Optional<BestellungCountAggregateOutputType> | number
          }
        }
      }
      Bestellposten: {
        payload: Prisma.$BestellpostenPayload<ExtArgs>
        fields: Prisma.BestellpostenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BestellpostenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellpostenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BestellpostenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellpostenPayload>
          }
          findFirst: {
            args: Prisma.BestellpostenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellpostenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BestellpostenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellpostenPayload>
          }
          findMany: {
            args: Prisma.BestellpostenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellpostenPayload>[]
          }
          create: {
            args: Prisma.BestellpostenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellpostenPayload>
          }
          createMany: {
            args: Prisma.BestellpostenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BestellpostenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellpostenPayload>[]
          }
          delete: {
            args: Prisma.BestellpostenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellpostenPayload>
          }
          update: {
            args: Prisma.BestellpostenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellpostenPayload>
          }
          deleteMany: {
            args: Prisma.BestellpostenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BestellpostenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BestellpostenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellpostenPayload>[]
          }
          upsert: {
            args: Prisma.BestellpostenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BestellpostenPayload>
          }
          aggregate: {
            args: Prisma.BestellpostenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBestellposten>
          }
          groupBy: {
            args: Prisma.BestellpostenGroupByArgs<ExtArgs>
            result: $Utils.Optional<BestellpostenGroupByOutputType>[]
          }
          count: {
            args: Prisma.BestellpostenCountArgs<ExtArgs>
            result: $Utils.Optional<BestellpostenCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    produkte?: ProdukteOmit
    warenkorb?: WarenkorbOmit
    bestellung?: BestellungOmit
    bestellposten?: BestellpostenOmit
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
    | 'updateManyAndReturn'
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
   * Count Type ProdukteCountOutputType
   */

  export type ProdukteCountOutputType = {
    Warenkorb: number
    Bestellposten: number
  }

  export type ProdukteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Warenkorb?: boolean | ProdukteCountOutputTypeCountWarenkorbArgs
    Bestellposten?: boolean | ProdukteCountOutputTypeCountBestellpostenArgs
  }

  // Custom InputTypes
  /**
   * ProdukteCountOutputType without action
   */
  export type ProdukteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukteCountOutputType
     */
    select?: ProdukteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdukteCountOutputType without action
   */
  export type ProdukteCountOutputTypeCountWarenkorbArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarenkorbWhereInput
  }

  /**
   * ProdukteCountOutputType without action
   */
  export type ProdukteCountOutputTypeCountBestellpostenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BestellpostenWhereInput
  }


  /**
   * Count Type BestellungCountOutputType
   */

  export type BestellungCountOutputType = {
    postens: number
  }

  export type BestellungCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postens?: boolean | BestellungCountOutputTypeCountPostensArgs
  }

  // Custom InputTypes
  /**
   * BestellungCountOutputType without action
   */
  export type BestellungCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BestellungCountOutputType
     */
    select?: BestellungCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BestellungCountOutputType without action
   */
  export type BestellungCountOutputTypeCountPostensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BestellpostenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Produkte
   */

  export type AggregateProdukte = {
    _count: ProdukteCountAggregateOutputType | null
    _avg: ProdukteAvgAggregateOutputType | null
    _sum: ProdukteSumAggregateOutputType | null
    _min: ProdukteMinAggregateOutputType | null
    _max: ProdukteMaxAggregateOutputType | null
  }

  export type ProdukteAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type ProdukteSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type ProdukteMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    imgsrc: string | null
  }

  export type ProdukteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    imgsrc: string | null
  }

  export type ProdukteCountAggregateOutputType = {
    id: number
    name: number
    price: number
    imgsrc: number
    _all: number
  }


  export type ProdukteAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type ProdukteSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type ProdukteMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    imgsrc?: true
  }

  export type ProdukteMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    imgsrc?: true
  }

  export type ProdukteCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    imgsrc?: true
    _all?: true
  }

  export type ProdukteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produkte to aggregate.
     */
    where?: ProdukteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produktes to fetch.
     */
    orderBy?: ProdukteOrderByWithRelationInput | ProdukteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdukteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produktes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produktes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produktes
    **/
    _count?: true | ProdukteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdukteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdukteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdukteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdukteMaxAggregateInputType
  }

  export type GetProdukteAggregateType<T extends ProdukteAggregateArgs> = {
        [P in keyof T & keyof AggregateProdukte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdukte[P]>
      : GetScalarType<T[P], AggregateProdukte[P]>
  }




  export type ProdukteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdukteWhereInput
    orderBy?: ProdukteOrderByWithAggregationInput | ProdukteOrderByWithAggregationInput[]
    by: ProdukteScalarFieldEnum[] | ProdukteScalarFieldEnum
    having?: ProdukteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdukteCountAggregateInputType | true
    _avg?: ProdukteAvgAggregateInputType
    _sum?: ProdukteSumAggregateInputType
    _min?: ProdukteMinAggregateInputType
    _max?: ProdukteMaxAggregateInputType
  }

  export type ProdukteGroupByOutputType = {
    id: number
    name: string
    price: Decimal
    imgsrc: string
    _count: ProdukteCountAggregateOutputType | null
    _avg: ProdukteAvgAggregateOutputType | null
    _sum: ProdukteSumAggregateOutputType | null
    _min: ProdukteMinAggregateOutputType | null
    _max: ProdukteMaxAggregateOutputType | null
  }

  type GetProdukteGroupByPayload<T extends ProdukteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdukteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdukteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdukteGroupByOutputType[P]>
            : GetScalarType<T[P], ProdukteGroupByOutputType[P]>
        }
      >
    >


  export type ProdukteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    imgsrc?: boolean
    Warenkorb?: boolean | Produkte$WarenkorbArgs<ExtArgs>
    Bestellposten?: boolean | Produkte$BestellpostenArgs<ExtArgs>
    _count?: boolean | ProdukteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produkte"]>

  export type ProdukteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    imgsrc?: boolean
  }, ExtArgs["result"]["produkte"]>

  export type ProdukteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    imgsrc?: boolean
  }, ExtArgs["result"]["produkte"]>

  export type ProdukteSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    imgsrc?: boolean
  }

  export type ProdukteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "imgsrc", ExtArgs["result"]["produkte"]>
  export type ProdukteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Warenkorb?: boolean | Produkte$WarenkorbArgs<ExtArgs>
    Bestellposten?: boolean | Produkte$BestellpostenArgs<ExtArgs>
    _count?: boolean | ProdukteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdukteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProdukteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProduktePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produkte"
    objects: {
      Warenkorb: Prisma.$WarenkorbPayload<ExtArgs>[]
      Bestellposten: Prisma.$BestellpostenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal
      imgsrc: string
    }, ExtArgs["result"]["produkte"]>
    composites: {}
  }

  type ProdukteGetPayload<S extends boolean | null | undefined | ProdukteDefaultArgs> = $Result.GetResult<Prisma.$ProduktePayload, S>

  type ProdukteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdukteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdukteCountAggregateInputType | true
    }

  export interface ProdukteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produkte'], meta: { name: 'Produkte' } }
    /**
     * Find zero or one Produkte that matches the filter.
     * @param {ProdukteFindUniqueArgs} args - Arguments to find a Produkte
     * @example
     * // Get one Produkte
     * const produkte = await prisma.produkte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdukteFindUniqueArgs>(args: SelectSubset<T, ProdukteFindUniqueArgs<ExtArgs>>): Prisma__ProdukteClient<$Result.GetResult<Prisma.$ProduktePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produkte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdukteFindUniqueOrThrowArgs} args - Arguments to find a Produkte
     * @example
     * // Get one Produkte
     * const produkte = await prisma.produkte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdukteFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdukteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdukteClient<$Result.GetResult<Prisma.$ProduktePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produkte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukteFindFirstArgs} args - Arguments to find a Produkte
     * @example
     * // Get one Produkte
     * const produkte = await prisma.produkte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdukteFindFirstArgs>(args?: SelectSubset<T, ProdukteFindFirstArgs<ExtArgs>>): Prisma__ProdukteClient<$Result.GetResult<Prisma.$ProduktePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produkte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukteFindFirstOrThrowArgs} args - Arguments to find a Produkte
     * @example
     * // Get one Produkte
     * const produkte = await prisma.produkte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdukteFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdukteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdukteClient<$Result.GetResult<Prisma.$ProduktePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produktes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produktes
     * const produktes = await prisma.produkte.findMany()
     * 
     * // Get first 10 Produktes
     * const produktes = await prisma.produkte.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produkteWithIdOnly = await prisma.produkte.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdukteFindManyArgs>(args?: SelectSubset<T, ProdukteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduktePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produkte.
     * @param {ProdukteCreateArgs} args - Arguments to create a Produkte.
     * @example
     * // Create one Produkte
     * const Produkte = await prisma.produkte.create({
     *   data: {
     *     // ... data to create a Produkte
     *   }
     * })
     * 
     */
    create<T extends ProdukteCreateArgs>(args: SelectSubset<T, ProdukteCreateArgs<ExtArgs>>): Prisma__ProdukteClient<$Result.GetResult<Prisma.$ProduktePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produktes.
     * @param {ProdukteCreateManyArgs} args - Arguments to create many Produktes.
     * @example
     * // Create many Produktes
     * const produkte = await prisma.produkte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdukteCreateManyArgs>(args?: SelectSubset<T, ProdukteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produktes and returns the data saved in the database.
     * @param {ProdukteCreateManyAndReturnArgs} args - Arguments to create many Produktes.
     * @example
     * // Create many Produktes
     * const produkte = await prisma.produkte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produktes and only return the `id`
     * const produkteWithIdOnly = await prisma.produkte.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdukteCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdukteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduktePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produkte.
     * @param {ProdukteDeleteArgs} args - Arguments to delete one Produkte.
     * @example
     * // Delete one Produkte
     * const Produkte = await prisma.produkte.delete({
     *   where: {
     *     // ... filter to delete one Produkte
     *   }
     * })
     * 
     */
    delete<T extends ProdukteDeleteArgs>(args: SelectSubset<T, ProdukteDeleteArgs<ExtArgs>>): Prisma__ProdukteClient<$Result.GetResult<Prisma.$ProduktePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produkte.
     * @param {ProdukteUpdateArgs} args - Arguments to update one Produkte.
     * @example
     * // Update one Produkte
     * const produkte = await prisma.produkte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdukteUpdateArgs>(args: SelectSubset<T, ProdukteUpdateArgs<ExtArgs>>): Prisma__ProdukteClient<$Result.GetResult<Prisma.$ProduktePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produktes.
     * @param {ProdukteDeleteManyArgs} args - Arguments to filter Produktes to delete.
     * @example
     * // Delete a few Produktes
     * const { count } = await prisma.produkte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdukteDeleteManyArgs>(args?: SelectSubset<T, ProdukteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produktes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produktes
     * const produkte = await prisma.produkte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdukteUpdateManyArgs>(args: SelectSubset<T, ProdukteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produktes and returns the data updated in the database.
     * @param {ProdukteUpdateManyAndReturnArgs} args - Arguments to update many Produktes.
     * @example
     * // Update many Produktes
     * const produkte = await prisma.produkte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produktes and only return the `id`
     * const produkteWithIdOnly = await prisma.produkte.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProdukteUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdukteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduktePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produkte.
     * @param {ProdukteUpsertArgs} args - Arguments to update or create a Produkte.
     * @example
     * // Update or create a Produkte
     * const produkte = await prisma.produkte.upsert({
     *   create: {
     *     // ... data to create a Produkte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produkte we want to update
     *   }
     * })
     */
    upsert<T extends ProdukteUpsertArgs>(args: SelectSubset<T, ProdukteUpsertArgs<ExtArgs>>): Prisma__ProdukteClient<$Result.GetResult<Prisma.$ProduktePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produktes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukteCountArgs} args - Arguments to filter Produktes to count.
     * @example
     * // Count the number of Produktes
     * const count = await prisma.produkte.count({
     *   where: {
     *     // ... the filter for the Produktes we want to count
     *   }
     * })
    **/
    count<T extends ProdukteCountArgs>(
      args?: Subset<T, ProdukteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdukteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produkte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdukteAggregateArgs>(args: Subset<T, ProdukteAggregateArgs>): Prisma.PrismaPromise<GetProdukteAggregateType<T>>

    /**
     * Group by Produkte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukteGroupByArgs} args - Group by arguments.
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
      T extends ProdukteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdukteGroupByArgs['orderBy'] }
        : { orderBy?: ProdukteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdukteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produkte model
   */
  readonly fields: ProdukteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produkte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdukteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Warenkorb<T extends Produkte$WarenkorbArgs<ExtArgs> = {}>(args?: Subset<T, Produkte$WarenkorbArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarenkorbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Bestellposten<T extends Produkte$BestellpostenArgs<ExtArgs> = {}>(args?: Subset<T, Produkte$BestellpostenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BestellpostenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produkte model
   */
  interface ProdukteFieldRefs {
    readonly id: FieldRef<"Produkte", 'Int'>
    readonly name: FieldRef<"Produkte", 'String'>
    readonly price: FieldRef<"Produkte", 'Decimal'>
    readonly imgsrc: FieldRef<"Produkte", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Produkte findUnique
   */
  export type ProdukteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produkte
     */
    select?: ProdukteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produkte
     */
    omit?: ProdukteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukteInclude<ExtArgs> | null
    /**
     * Filter, which Produkte to fetch.
     */
    where: ProdukteWhereUniqueInput
  }

  /**
   * Produkte findUniqueOrThrow
   */
  export type ProdukteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produkte
     */
    select?: ProdukteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produkte
     */
    omit?: ProdukteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukteInclude<ExtArgs> | null
    /**
     * Filter, which Produkte to fetch.
     */
    where: ProdukteWhereUniqueInput
  }

  /**
   * Produkte findFirst
   */
  export type ProdukteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produkte
     */
    select?: ProdukteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produkte
     */
    omit?: ProdukteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukteInclude<ExtArgs> | null
    /**
     * Filter, which Produkte to fetch.
     */
    where?: ProdukteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produktes to fetch.
     */
    orderBy?: ProdukteOrderByWithRelationInput | ProdukteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produktes.
     */
    cursor?: ProdukteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produktes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produktes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produktes.
     */
    distinct?: ProdukteScalarFieldEnum | ProdukteScalarFieldEnum[]
  }

  /**
   * Produkte findFirstOrThrow
   */
  export type ProdukteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produkte
     */
    select?: ProdukteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produkte
     */
    omit?: ProdukteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukteInclude<ExtArgs> | null
    /**
     * Filter, which Produkte to fetch.
     */
    where?: ProdukteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produktes to fetch.
     */
    orderBy?: ProdukteOrderByWithRelationInput | ProdukteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produktes.
     */
    cursor?: ProdukteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produktes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produktes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produktes.
     */
    distinct?: ProdukteScalarFieldEnum | ProdukteScalarFieldEnum[]
  }

  /**
   * Produkte findMany
   */
  export type ProdukteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produkte
     */
    select?: ProdukteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produkte
     */
    omit?: ProdukteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukteInclude<ExtArgs> | null
    /**
     * Filter, which Produktes to fetch.
     */
    where?: ProdukteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produktes to fetch.
     */
    orderBy?: ProdukteOrderByWithRelationInput | ProdukteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produktes.
     */
    cursor?: ProdukteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produktes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produktes.
     */
    skip?: number
    distinct?: ProdukteScalarFieldEnum | ProdukteScalarFieldEnum[]
  }

  /**
   * Produkte create
   */
  export type ProdukteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produkte
     */
    select?: ProdukteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produkte
     */
    omit?: ProdukteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukteInclude<ExtArgs> | null
    /**
     * The data needed to create a Produkte.
     */
    data: XOR<ProdukteCreateInput, ProdukteUncheckedCreateInput>
  }

  /**
   * Produkte createMany
   */
  export type ProdukteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produktes.
     */
    data: ProdukteCreateManyInput | ProdukteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produkte createManyAndReturn
   */
  export type ProdukteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produkte
     */
    select?: ProdukteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produkte
     */
    omit?: ProdukteOmit<ExtArgs> | null
    /**
     * The data used to create many Produktes.
     */
    data: ProdukteCreateManyInput | ProdukteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produkte update
   */
  export type ProdukteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produkte
     */
    select?: ProdukteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produkte
     */
    omit?: ProdukteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukteInclude<ExtArgs> | null
    /**
     * The data needed to update a Produkte.
     */
    data: XOR<ProdukteUpdateInput, ProdukteUncheckedUpdateInput>
    /**
     * Choose, which Produkte to update.
     */
    where: ProdukteWhereUniqueInput
  }

  /**
   * Produkte updateMany
   */
  export type ProdukteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produktes.
     */
    data: XOR<ProdukteUpdateManyMutationInput, ProdukteUncheckedUpdateManyInput>
    /**
     * Filter which Produktes to update
     */
    where?: ProdukteWhereInput
    /**
     * Limit how many Produktes to update.
     */
    limit?: number
  }

  /**
   * Produkte updateManyAndReturn
   */
  export type ProdukteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produkte
     */
    select?: ProdukteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produkte
     */
    omit?: ProdukteOmit<ExtArgs> | null
    /**
     * The data used to update Produktes.
     */
    data: XOR<ProdukteUpdateManyMutationInput, ProdukteUncheckedUpdateManyInput>
    /**
     * Filter which Produktes to update
     */
    where?: ProdukteWhereInput
    /**
     * Limit how many Produktes to update.
     */
    limit?: number
  }

  /**
   * Produkte upsert
   */
  export type ProdukteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produkte
     */
    select?: ProdukteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produkte
     */
    omit?: ProdukteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukteInclude<ExtArgs> | null
    /**
     * The filter to search for the Produkte to update in case it exists.
     */
    where: ProdukteWhereUniqueInput
    /**
     * In case the Produkte found by the `where` argument doesn't exist, create a new Produkte with this data.
     */
    create: XOR<ProdukteCreateInput, ProdukteUncheckedCreateInput>
    /**
     * In case the Produkte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdukteUpdateInput, ProdukteUncheckedUpdateInput>
  }

  /**
   * Produkte delete
   */
  export type ProdukteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produkte
     */
    select?: ProdukteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produkte
     */
    omit?: ProdukteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukteInclude<ExtArgs> | null
    /**
     * Filter which Produkte to delete.
     */
    where: ProdukteWhereUniqueInput
  }

  /**
   * Produkte deleteMany
   */
  export type ProdukteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produktes to delete
     */
    where?: ProdukteWhereInput
    /**
     * Limit how many Produktes to delete.
     */
    limit?: number
  }

  /**
   * Produkte.Warenkorb
   */
  export type Produkte$WarenkorbArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warenkorb
     */
    select?: WarenkorbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warenkorb
     */
    omit?: WarenkorbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarenkorbInclude<ExtArgs> | null
    where?: WarenkorbWhereInput
    orderBy?: WarenkorbOrderByWithRelationInput | WarenkorbOrderByWithRelationInput[]
    cursor?: WarenkorbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarenkorbScalarFieldEnum | WarenkorbScalarFieldEnum[]
  }

  /**
   * Produkte.Bestellposten
   */
  export type Produkte$BestellpostenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellposten
     */
    select?: BestellpostenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellposten
     */
    omit?: BestellpostenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellpostenInclude<ExtArgs> | null
    where?: BestellpostenWhereInput
    orderBy?: BestellpostenOrderByWithRelationInput | BestellpostenOrderByWithRelationInput[]
    cursor?: BestellpostenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BestellpostenScalarFieldEnum | BestellpostenScalarFieldEnum[]
  }

  /**
   * Produkte without action
   */
  export type ProdukteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produkte
     */
    select?: ProdukteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produkte
     */
    omit?: ProdukteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukteInclude<ExtArgs> | null
  }


  /**
   * Model Warenkorb
   */

  export type AggregateWarenkorb = {
    _count: WarenkorbCountAggregateOutputType | null
    _avg: WarenkorbAvgAggregateOutputType | null
    _sum: WarenkorbSumAggregateOutputType | null
    _min: WarenkorbMinAggregateOutputType | null
    _max: WarenkorbMaxAggregateOutputType | null
  }

  export type WarenkorbAvgAggregateOutputType = {
    id: number | null
    productid: number | null
    quantity: number | null
  }

  export type WarenkorbSumAggregateOutputType = {
    id: number | null
    productid: number | null
    quantity: number | null
  }

  export type WarenkorbMinAggregateOutputType = {
    id: number | null
    sessionid: string | null
    productid: number | null
    quantity: number | null
  }

  export type WarenkorbMaxAggregateOutputType = {
    id: number | null
    sessionid: string | null
    productid: number | null
    quantity: number | null
  }

  export type WarenkorbCountAggregateOutputType = {
    id: number
    sessionid: number
    productid: number
    quantity: number
    _all: number
  }


  export type WarenkorbAvgAggregateInputType = {
    id?: true
    productid?: true
    quantity?: true
  }

  export type WarenkorbSumAggregateInputType = {
    id?: true
    productid?: true
    quantity?: true
  }

  export type WarenkorbMinAggregateInputType = {
    id?: true
    sessionid?: true
    productid?: true
    quantity?: true
  }

  export type WarenkorbMaxAggregateInputType = {
    id?: true
    sessionid?: true
    productid?: true
    quantity?: true
  }

  export type WarenkorbCountAggregateInputType = {
    id?: true
    sessionid?: true
    productid?: true
    quantity?: true
    _all?: true
  }

  export type WarenkorbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warenkorb to aggregate.
     */
    where?: WarenkorbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warenkorbs to fetch.
     */
    orderBy?: WarenkorbOrderByWithRelationInput | WarenkorbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarenkorbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warenkorbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warenkorbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warenkorbs
    **/
    _count?: true | WarenkorbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarenkorbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarenkorbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarenkorbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarenkorbMaxAggregateInputType
  }

  export type GetWarenkorbAggregateType<T extends WarenkorbAggregateArgs> = {
        [P in keyof T & keyof AggregateWarenkorb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarenkorb[P]>
      : GetScalarType<T[P], AggregateWarenkorb[P]>
  }




  export type WarenkorbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarenkorbWhereInput
    orderBy?: WarenkorbOrderByWithAggregationInput | WarenkorbOrderByWithAggregationInput[]
    by: WarenkorbScalarFieldEnum[] | WarenkorbScalarFieldEnum
    having?: WarenkorbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarenkorbCountAggregateInputType | true
    _avg?: WarenkorbAvgAggregateInputType
    _sum?: WarenkorbSumAggregateInputType
    _min?: WarenkorbMinAggregateInputType
    _max?: WarenkorbMaxAggregateInputType
  }

  export type WarenkorbGroupByOutputType = {
    id: number
    sessionid: string
    productid: number
    quantity: number
    _count: WarenkorbCountAggregateOutputType | null
    _avg: WarenkorbAvgAggregateOutputType | null
    _sum: WarenkorbSumAggregateOutputType | null
    _min: WarenkorbMinAggregateOutputType | null
    _max: WarenkorbMaxAggregateOutputType | null
  }

  type GetWarenkorbGroupByPayload<T extends WarenkorbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarenkorbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarenkorbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarenkorbGroupByOutputType[P]>
            : GetScalarType<T[P], WarenkorbGroupByOutputType[P]>
        }
      >
    >


  export type WarenkorbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionid?: boolean
    productid?: boolean
    quantity?: boolean
    product?: boolean | ProdukteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warenkorb"]>

  export type WarenkorbSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionid?: boolean
    productid?: boolean
    quantity?: boolean
    product?: boolean | ProdukteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warenkorb"]>

  export type WarenkorbSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionid?: boolean
    productid?: boolean
    quantity?: boolean
    product?: boolean | ProdukteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warenkorb"]>

  export type WarenkorbSelectScalar = {
    id?: boolean
    sessionid?: boolean
    productid?: boolean
    quantity?: boolean
  }

  export type WarenkorbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionid" | "productid" | "quantity", ExtArgs["result"]["warenkorb"]>
  export type WarenkorbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProdukteDefaultArgs<ExtArgs>
  }
  export type WarenkorbIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProdukteDefaultArgs<ExtArgs>
  }
  export type WarenkorbIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProdukteDefaultArgs<ExtArgs>
  }

  export type $WarenkorbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warenkorb"
    objects: {
      product: Prisma.$ProduktePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sessionid: string
      productid: number
      quantity: number
    }, ExtArgs["result"]["warenkorb"]>
    composites: {}
  }

  type WarenkorbGetPayload<S extends boolean | null | undefined | WarenkorbDefaultArgs> = $Result.GetResult<Prisma.$WarenkorbPayload, S>

  type WarenkorbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarenkorbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarenkorbCountAggregateInputType | true
    }

  export interface WarenkorbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warenkorb'], meta: { name: 'Warenkorb' } }
    /**
     * Find zero or one Warenkorb that matches the filter.
     * @param {WarenkorbFindUniqueArgs} args - Arguments to find a Warenkorb
     * @example
     * // Get one Warenkorb
     * const warenkorb = await prisma.warenkorb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarenkorbFindUniqueArgs>(args: SelectSubset<T, WarenkorbFindUniqueArgs<ExtArgs>>): Prisma__WarenkorbClient<$Result.GetResult<Prisma.$WarenkorbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warenkorb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarenkorbFindUniqueOrThrowArgs} args - Arguments to find a Warenkorb
     * @example
     * // Get one Warenkorb
     * const warenkorb = await prisma.warenkorb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarenkorbFindUniqueOrThrowArgs>(args: SelectSubset<T, WarenkorbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarenkorbClient<$Result.GetResult<Prisma.$WarenkorbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warenkorb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarenkorbFindFirstArgs} args - Arguments to find a Warenkorb
     * @example
     * // Get one Warenkorb
     * const warenkorb = await prisma.warenkorb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarenkorbFindFirstArgs>(args?: SelectSubset<T, WarenkorbFindFirstArgs<ExtArgs>>): Prisma__WarenkorbClient<$Result.GetResult<Prisma.$WarenkorbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warenkorb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarenkorbFindFirstOrThrowArgs} args - Arguments to find a Warenkorb
     * @example
     * // Get one Warenkorb
     * const warenkorb = await prisma.warenkorb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarenkorbFindFirstOrThrowArgs>(args?: SelectSubset<T, WarenkorbFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarenkorbClient<$Result.GetResult<Prisma.$WarenkorbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warenkorbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarenkorbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warenkorbs
     * const warenkorbs = await prisma.warenkorb.findMany()
     * 
     * // Get first 10 Warenkorbs
     * const warenkorbs = await prisma.warenkorb.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warenkorbWithIdOnly = await prisma.warenkorb.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarenkorbFindManyArgs>(args?: SelectSubset<T, WarenkorbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarenkorbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warenkorb.
     * @param {WarenkorbCreateArgs} args - Arguments to create a Warenkorb.
     * @example
     * // Create one Warenkorb
     * const Warenkorb = await prisma.warenkorb.create({
     *   data: {
     *     // ... data to create a Warenkorb
     *   }
     * })
     * 
     */
    create<T extends WarenkorbCreateArgs>(args: SelectSubset<T, WarenkorbCreateArgs<ExtArgs>>): Prisma__WarenkorbClient<$Result.GetResult<Prisma.$WarenkorbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Warenkorbs.
     * @param {WarenkorbCreateManyArgs} args - Arguments to create many Warenkorbs.
     * @example
     * // Create many Warenkorbs
     * const warenkorb = await prisma.warenkorb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarenkorbCreateManyArgs>(args?: SelectSubset<T, WarenkorbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warenkorbs and returns the data saved in the database.
     * @param {WarenkorbCreateManyAndReturnArgs} args - Arguments to create many Warenkorbs.
     * @example
     * // Create many Warenkorbs
     * const warenkorb = await prisma.warenkorb.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warenkorbs and only return the `id`
     * const warenkorbWithIdOnly = await prisma.warenkorb.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarenkorbCreateManyAndReturnArgs>(args?: SelectSubset<T, WarenkorbCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarenkorbPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Warenkorb.
     * @param {WarenkorbDeleteArgs} args - Arguments to delete one Warenkorb.
     * @example
     * // Delete one Warenkorb
     * const Warenkorb = await prisma.warenkorb.delete({
     *   where: {
     *     // ... filter to delete one Warenkorb
     *   }
     * })
     * 
     */
    delete<T extends WarenkorbDeleteArgs>(args: SelectSubset<T, WarenkorbDeleteArgs<ExtArgs>>): Prisma__WarenkorbClient<$Result.GetResult<Prisma.$WarenkorbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warenkorb.
     * @param {WarenkorbUpdateArgs} args - Arguments to update one Warenkorb.
     * @example
     * // Update one Warenkorb
     * const warenkorb = await prisma.warenkorb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarenkorbUpdateArgs>(args: SelectSubset<T, WarenkorbUpdateArgs<ExtArgs>>): Prisma__WarenkorbClient<$Result.GetResult<Prisma.$WarenkorbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Warenkorbs.
     * @param {WarenkorbDeleteManyArgs} args - Arguments to filter Warenkorbs to delete.
     * @example
     * // Delete a few Warenkorbs
     * const { count } = await prisma.warenkorb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarenkorbDeleteManyArgs>(args?: SelectSubset<T, WarenkorbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warenkorbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarenkorbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warenkorbs
     * const warenkorb = await prisma.warenkorb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarenkorbUpdateManyArgs>(args: SelectSubset<T, WarenkorbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warenkorbs and returns the data updated in the database.
     * @param {WarenkorbUpdateManyAndReturnArgs} args - Arguments to update many Warenkorbs.
     * @example
     * // Update many Warenkorbs
     * const warenkorb = await prisma.warenkorb.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Warenkorbs and only return the `id`
     * const warenkorbWithIdOnly = await prisma.warenkorb.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WarenkorbUpdateManyAndReturnArgs>(args: SelectSubset<T, WarenkorbUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarenkorbPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Warenkorb.
     * @param {WarenkorbUpsertArgs} args - Arguments to update or create a Warenkorb.
     * @example
     * // Update or create a Warenkorb
     * const warenkorb = await prisma.warenkorb.upsert({
     *   create: {
     *     // ... data to create a Warenkorb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warenkorb we want to update
     *   }
     * })
     */
    upsert<T extends WarenkorbUpsertArgs>(args: SelectSubset<T, WarenkorbUpsertArgs<ExtArgs>>): Prisma__WarenkorbClient<$Result.GetResult<Prisma.$WarenkorbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Warenkorbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarenkorbCountArgs} args - Arguments to filter Warenkorbs to count.
     * @example
     * // Count the number of Warenkorbs
     * const count = await prisma.warenkorb.count({
     *   where: {
     *     // ... the filter for the Warenkorbs we want to count
     *   }
     * })
    **/
    count<T extends WarenkorbCountArgs>(
      args?: Subset<T, WarenkorbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarenkorbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warenkorb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarenkorbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WarenkorbAggregateArgs>(args: Subset<T, WarenkorbAggregateArgs>): Prisma.PrismaPromise<GetWarenkorbAggregateType<T>>

    /**
     * Group by Warenkorb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarenkorbGroupByArgs} args - Group by arguments.
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
      T extends WarenkorbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarenkorbGroupByArgs['orderBy'] }
        : { orderBy?: WarenkorbGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WarenkorbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarenkorbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warenkorb model
   */
  readonly fields: WarenkorbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warenkorb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarenkorbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProdukteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdukteDefaultArgs<ExtArgs>>): Prisma__ProdukteClient<$Result.GetResult<Prisma.$ProduktePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Warenkorb model
   */
  interface WarenkorbFieldRefs {
    readonly id: FieldRef<"Warenkorb", 'Int'>
    readonly sessionid: FieldRef<"Warenkorb", 'String'>
    readonly productid: FieldRef<"Warenkorb", 'Int'>
    readonly quantity: FieldRef<"Warenkorb", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Warenkorb findUnique
   */
  export type WarenkorbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warenkorb
     */
    select?: WarenkorbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warenkorb
     */
    omit?: WarenkorbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarenkorbInclude<ExtArgs> | null
    /**
     * Filter, which Warenkorb to fetch.
     */
    where: WarenkorbWhereUniqueInput
  }

  /**
   * Warenkorb findUniqueOrThrow
   */
  export type WarenkorbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warenkorb
     */
    select?: WarenkorbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warenkorb
     */
    omit?: WarenkorbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarenkorbInclude<ExtArgs> | null
    /**
     * Filter, which Warenkorb to fetch.
     */
    where: WarenkorbWhereUniqueInput
  }

  /**
   * Warenkorb findFirst
   */
  export type WarenkorbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warenkorb
     */
    select?: WarenkorbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warenkorb
     */
    omit?: WarenkorbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarenkorbInclude<ExtArgs> | null
    /**
     * Filter, which Warenkorb to fetch.
     */
    where?: WarenkorbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warenkorbs to fetch.
     */
    orderBy?: WarenkorbOrderByWithRelationInput | WarenkorbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warenkorbs.
     */
    cursor?: WarenkorbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warenkorbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warenkorbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warenkorbs.
     */
    distinct?: WarenkorbScalarFieldEnum | WarenkorbScalarFieldEnum[]
  }

  /**
   * Warenkorb findFirstOrThrow
   */
  export type WarenkorbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warenkorb
     */
    select?: WarenkorbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warenkorb
     */
    omit?: WarenkorbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarenkorbInclude<ExtArgs> | null
    /**
     * Filter, which Warenkorb to fetch.
     */
    where?: WarenkorbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warenkorbs to fetch.
     */
    orderBy?: WarenkorbOrderByWithRelationInput | WarenkorbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warenkorbs.
     */
    cursor?: WarenkorbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warenkorbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warenkorbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warenkorbs.
     */
    distinct?: WarenkorbScalarFieldEnum | WarenkorbScalarFieldEnum[]
  }

  /**
   * Warenkorb findMany
   */
  export type WarenkorbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warenkorb
     */
    select?: WarenkorbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warenkorb
     */
    omit?: WarenkorbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarenkorbInclude<ExtArgs> | null
    /**
     * Filter, which Warenkorbs to fetch.
     */
    where?: WarenkorbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warenkorbs to fetch.
     */
    orderBy?: WarenkorbOrderByWithRelationInput | WarenkorbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warenkorbs.
     */
    cursor?: WarenkorbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warenkorbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warenkorbs.
     */
    skip?: number
    distinct?: WarenkorbScalarFieldEnum | WarenkorbScalarFieldEnum[]
  }

  /**
   * Warenkorb create
   */
  export type WarenkorbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warenkorb
     */
    select?: WarenkorbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warenkorb
     */
    omit?: WarenkorbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarenkorbInclude<ExtArgs> | null
    /**
     * The data needed to create a Warenkorb.
     */
    data: XOR<WarenkorbCreateInput, WarenkorbUncheckedCreateInput>
  }

  /**
   * Warenkorb createMany
   */
  export type WarenkorbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warenkorbs.
     */
    data: WarenkorbCreateManyInput | WarenkorbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warenkorb createManyAndReturn
   */
  export type WarenkorbCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warenkorb
     */
    select?: WarenkorbSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warenkorb
     */
    omit?: WarenkorbOmit<ExtArgs> | null
    /**
     * The data used to create many Warenkorbs.
     */
    data: WarenkorbCreateManyInput | WarenkorbCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarenkorbIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Warenkorb update
   */
  export type WarenkorbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warenkorb
     */
    select?: WarenkorbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warenkorb
     */
    omit?: WarenkorbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarenkorbInclude<ExtArgs> | null
    /**
     * The data needed to update a Warenkorb.
     */
    data: XOR<WarenkorbUpdateInput, WarenkorbUncheckedUpdateInput>
    /**
     * Choose, which Warenkorb to update.
     */
    where: WarenkorbWhereUniqueInput
  }

  /**
   * Warenkorb updateMany
   */
  export type WarenkorbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warenkorbs.
     */
    data: XOR<WarenkorbUpdateManyMutationInput, WarenkorbUncheckedUpdateManyInput>
    /**
     * Filter which Warenkorbs to update
     */
    where?: WarenkorbWhereInput
    /**
     * Limit how many Warenkorbs to update.
     */
    limit?: number
  }

  /**
   * Warenkorb updateManyAndReturn
   */
  export type WarenkorbUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warenkorb
     */
    select?: WarenkorbSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warenkorb
     */
    omit?: WarenkorbOmit<ExtArgs> | null
    /**
     * The data used to update Warenkorbs.
     */
    data: XOR<WarenkorbUpdateManyMutationInput, WarenkorbUncheckedUpdateManyInput>
    /**
     * Filter which Warenkorbs to update
     */
    where?: WarenkorbWhereInput
    /**
     * Limit how many Warenkorbs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarenkorbIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Warenkorb upsert
   */
  export type WarenkorbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warenkorb
     */
    select?: WarenkorbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warenkorb
     */
    omit?: WarenkorbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarenkorbInclude<ExtArgs> | null
    /**
     * The filter to search for the Warenkorb to update in case it exists.
     */
    where: WarenkorbWhereUniqueInput
    /**
     * In case the Warenkorb found by the `where` argument doesn't exist, create a new Warenkorb with this data.
     */
    create: XOR<WarenkorbCreateInput, WarenkorbUncheckedCreateInput>
    /**
     * In case the Warenkorb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarenkorbUpdateInput, WarenkorbUncheckedUpdateInput>
  }

  /**
   * Warenkorb delete
   */
  export type WarenkorbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warenkorb
     */
    select?: WarenkorbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warenkorb
     */
    omit?: WarenkorbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarenkorbInclude<ExtArgs> | null
    /**
     * Filter which Warenkorb to delete.
     */
    where: WarenkorbWhereUniqueInput
  }

  /**
   * Warenkorb deleteMany
   */
  export type WarenkorbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warenkorbs to delete
     */
    where?: WarenkorbWhereInput
    /**
     * Limit how many Warenkorbs to delete.
     */
    limit?: number
  }

  /**
   * Warenkorb without action
   */
  export type WarenkorbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warenkorb
     */
    select?: WarenkorbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warenkorb
     */
    omit?: WarenkorbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarenkorbInclude<ExtArgs> | null
  }


  /**
   * Model Bestellung
   */

  export type AggregateBestellung = {
    _count: BestellungCountAggregateOutputType | null
    _avg: BestellungAvgAggregateOutputType | null
    _sum: BestellungSumAggregateOutputType | null
    _min: BestellungMinAggregateOutputType | null
    _max: BestellungMaxAggregateOutputType | null
  }

  export type BestellungAvgAggregateOutputType = {
    id: number | null
    gesamtpreis: Decimal | null
  }

  export type BestellungSumAggregateOutputType = {
    id: number | null
    gesamtpreis: Decimal | null
  }

  export type BestellungMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    sessionid: string | null
    gesamtpreis: Decimal | null
  }

  export type BestellungMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    sessionid: string | null
    gesamtpreis: Decimal | null
  }

  export type BestellungCountAggregateOutputType = {
    id: number
    createdAt: number
    sessionid: number
    gesamtpreis: number
    _all: number
  }


  export type BestellungAvgAggregateInputType = {
    id?: true
    gesamtpreis?: true
  }

  export type BestellungSumAggregateInputType = {
    id?: true
    gesamtpreis?: true
  }

  export type BestellungMinAggregateInputType = {
    id?: true
    createdAt?: true
    sessionid?: true
    gesamtpreis?: true
  }

  export type BestellungMaxAggregateInputType = {
    id?: true
    createdAt?: true
    sessionid?: true
    gesamtpreis?: true
  }

  export type BestellungCountAggregateInputType = {
    id?: true
    createdAt?: true
    sessionid?: true
    gesamtpreis?: true
    _all?: true
  }

  export type BestellungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bestellung to aggregate.
     */
    where?: BestellungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bestellungs to fetch.
     */
    orderBy?: BestellungOrderByWithRelationInput | BestellungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BestellungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bestellungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bestellungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bestellungs
    **/
    _count?: true | BestellungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BestellungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BestellungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BestellungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BestellungMaxAggregateInputType
  }

  export type GetBestellungAggregateType<T extends BestellungAggregateArgs> = {
        [P in keyof T & keyof AggregateBestellung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBestellung[P]>
      : GetScalarType<T[P], AggregateBestellung[P]>
  }




  export type BestellungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BestellungWhereInput
    orderBy?: BestellungOrderByWithAggregationInput | BestellungOrderByWithAggregationInput[]
    by: BestellungScalarFieldEnum[] | BestellungScalarFieldEnum
    having?: BestellungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BestellungCountAggregateInputType | true
    _avg?: BestellungAvgAggregateInputType
    _sum?: BestellungSumAggregateInputType
    _min?: BestellungMinAggregateInputType
    _max?: BestellungMaxAggregateInputType
  }

  export type BestellungGroupByOutputType = {
    id: number
    createdAt: Date
    sessionid: string
    gesamtpreis: Decimal
    _count: BestellungCountAggregateOutputType | null
    _avg: BestellungAvgAggregateOutputType | null
    _sum: BestellungSumAggregateOutputType | null
    _min: BestellungMinAggregateOutputType | null
    _max: BestellungMaxAggregateOutputType | null
  }

  type GetBestellungGroupByPayload<T extends BestellungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BestellungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BestellungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BestellungGroupByOutputType[P]>
            : GetScalarType<T[P], BestellungGroupByOutputType[P]>
        }
      >
    >


  export type BestellungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    sessionid?: boolean
    gesamtpreis?: boolean
    postens?: boolean | Bestellung$postensArgs<ExtArgs>
    _count?: boolean | BestellungCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bestellung"]>

  export type BestellungSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    sessionid?: boolean
    gesamtpreis?: boolean
  }, ExtArgs["result"]["bestellung"]>

  export type BestellungSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    sessionid?: boolean
    gesamtpreis?: boolean
  }, ExtArgs["result"]["bestellung"]>

  export type BestellungSelectScalar = {
    id?: boolean
    createdAt?: boolean
    sessionid?: boolean
    gesamtpreis?: boolean
  }

  export type BestellungOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "sessionid" | "gesamtpreis", ExtArgs["result"]["bestellung"]>
  export type BestellungInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postens?: boolean | Bestellung$postensArgs<ExtArgs>
    _count?: boolean | BestellungCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BestellungIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BestellungIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BestellungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bestellung"
    objects: {
      postens: Prisma.$BestellpostenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      sessionid: string
      gesamtpreis: Prisma.Decimal
    }, ExtArgs["result"]["bestellung"]>
    composites: {}
  }

  type BestellungGetPayload<S extends boolean | null | undefined | BestellungDefaultArgs> = $Result.GetResult<Prisma.$BestellungPayload, S>

  type BestellungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BestellungFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BestellungCountAggregateInputType | true
    }

  export interface BestellungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bestellung'], meta: { name: 'Bestellung' } }
    /**
     * Find zero or one Bestellung that matches the filter.
     * @param {BestellungFindUniqueArgs} args - Arguments to find a Bestellung
     * @example
     * // Get one Bestellung
     * const bestellung = await prisma.bestellung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BestellungFindUniqueArgs>(args: SelectSubset<T, BestellungFindUniqueArgs<ExtArgs>>): Prisma__BestellungClient<$Result.GetResult<Prisma.$BestellungPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bestellung that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BestellungFindUniqueOrThrowArgs} args - Arguments to find a Bestellung
     * @example
     * // Get one Bestellung
     * const bestellung = await prisma.bestellung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BestellungFindUniqueOrThrowArgs>(args: SelectSubset<T, BestellungFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BestellungClient<$Result.GetResult<Prisma.$BestellungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bestellung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BestellungFindFirstArgs} args - Arguments to find a Bestellung
     * @example
     * // Get one Bestellung
     * const bestellung = await prisma.bestellung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BestellungFindFirstArgs>(args?: SelectSubset<T, BestellungFindFirstArgs<ExtArgs>>): Prisma__BestellungClient<$Result.GetResult<Prisma.$BestellungPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bestellung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BestellungFindFirstOrThrowArgs} args - Arguments to find a Bestellung
     * @example
     * // Get one Bestellung
     * const bestellung = await prisma.bestellung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BestellungFindFirstOrThrowArgs>(args?: SelectSubset<T, BestellungFindFirstOrThrowArgs<ExtArgs>>): Prisma__BestellungClient<$Result.GetResult<Prisma.$BestellungPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bestellungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BestellungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bestellungs
     * const bestellungs = await prisma.bestellung.findMany()
     * 
     * // Get first 10 Bestellungs
     * const bestellungs = await prisma.bestellung.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bestellungWithIdOnly = await prisma.bestellung.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BestellungFindManyArgs>(args?: SelectSubset<T, BestellungFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BestellungPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bestellung.
     * @param {BestellungCreateArgs} args - Arguments to create a Bestellung.
     * @example
     * // Create one Bestellung
     * const Bestellung = await prisma.bestellung.create({
     *   data: {
     *     // ... data to create a Bestellung
     *   }
     * })
     * 
     */
    create<T extends BestellungCreateArgs>(args: SelectSubset<T, BestellungCreateArgs<ExtArgs>>): Prisma__BestellungClient<$Result.GetResult<Prisma.$BestellungPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bestellungs.
     * @param {BestellungCreateManyArgs} args - Arguments to create many Bestellungs.
     * @example
     * // Create many Bestellungs
     * const bestellung = await prisma.bestellung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BestellungCreateManyArgs>(args?: SelectSubset<T, BestellungCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bestellungs and returns the data saved in the database.
     * @param {BestellungCreateManyAndReturnArgs} args - Arguments to create many Bestellungs.
     * @example
     * // Create many Bestellungs
     * const bestellung = await prisma.bestellung.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bestellungs and only return the `id`
     * const bestellungWithIdOnly = await prisma.bestellung.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BestellungCreateManyAndReturnArgs>(args?: SelectSubset<T, BestellungCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BestellungPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bestellung.
     * @param {BestellungDeleteArgs} args - Arguments to delete one Bestellung.
     * @example
     * // Delete one Bestellung
     * const Bestellung = await prisma.bestellung.delete({
     *   where: {
     *     // ... filter to delete one Bestellung
     *   }
     * })
     * 
     */
    delete<T extends BestellungDeleteArgs>(args: SelectSubset<T, BestellungDeleteArgs<ExtArgs>>): Prisma__BestellungClient<$Result.GetResult<Prisma.$BestellungPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bestellung.
     * @param {BestellungUpdateArgs} args - Arguments to update one Bestellung.
     * @example
     * // Update one Bestellung
     * const bestellung = await prisma.bestellung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BestellungUpdateArgs>(args: SelectSubset<T, BestellungUpdateArgs<ExtArgs>>): Prisma__BestellungClient<$Result.GetResult<Prisma.$BestellungPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bestellungs.
     * @param {BestellungDeleteManyArgs} args - Arguments to filter Bestellungs to delete.
     * @example
     * // Delete a few Bestellungs
     * const { count } = await prisma.bestellung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BestellungDeleteManyArgs>(args?: SelectSubset<T, BestellungDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bestellungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BestellungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bestellungs
     * const bestellung = await prisma.bestellung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BestellungUpdateManyArgs>(args: SelectSubset<T, BestellungUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bestellungs and returns the data updated in the database.
     * @param {BestellungUpdateManyAndReturnArgs} args - Arguments to update many Bestellungs.
     * @example
     * // Update many Bestellungs
     * const bestellung = await prisma.bestellung.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bestellungs and only return the `id`
     * const bestellungWithIdOnly = await prisma.bestellung.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BestellungUpdateManyAndReturnArgs>(args: SelectSubset<T, BestellungUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BestellungPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bestellung.
     * @param {BestellungUpsertArgs} args - Arguments to update or create a Bestellung.
     * @example
     * // Update or create a Bestellung
     * const bestellung = await prisma.bestellung.upsert({
     *   create: {
     *     // ... data to create a Bestellung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bestellung we want to update
     *   }
     * })
     */
    upsert<T extends BestellungUpsertArgs>(args: SelectSubset<T, BestellungUpsertArgs<ExtArgs>>): Prisma__BestellungClient<$Result.GetResult<Prisma.$BestellungPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bestellungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BestellungCountArgs} args - Arguments to filter Bestellungs to count.
     * @example
     * // Count the number of Bestellungs
     * const count = await prisma.bestellung.count({
     *   where: {
     *     // ... the filter for the Bestellungs we want to count
     *   }
     * })
    **/
    count<T extends BestellungCountArgs>(
      args?: Subset<T, BestellungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BestellungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bestellung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BestellungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BestellungAggregateArgs>(args: Subset<T, BestellungAggregateArgs>): Prisma.PrismaPromise<GetBestellungAggregateType<T>>

    /**
     * Group by Bestellung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BestellungGroupByArgs} args - Group by arguments.
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
      T extends BestellungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BestellungGroupByArgs['orderBy'] }
        : { orderBy?: BestellungGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BestellungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBestellungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bestellung model
   */
  readonly fields: BestellungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bestellung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BestellungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postens<T extends Bestellung$postensArgs<ExtArgs> = {}>(args?: Subset<T, Bestellung$postensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BestellpostenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Bestellung model
   */
  interface BestellungFieldRefs {
    readonly id: FieldRef<"Bestellung", 'Int'>
    readonly createdAt: FieldRef<"Bestellung", 'DateTime'>
    readonly sessionid: FieldRef<"Bestellung", 'String'>
    readonly gesamtpreis: FieldRef<"Bestellung", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Bestellung findUnique
   */
  export type BestellungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellung
     */
    select?: BestellungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellung
     */
    omit?: BestellungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellungInclude<ExtArgs> | null
    /**
     * Filter, which Bestellung to fetch.
     */
    where: BestellungWhereUniqueInput
  }

  /**
   * Bestellung findUniqueOrThrow
   */
  export type BestellungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellung
     */
    select?: BestellungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellung
     */
    omit?: BestellungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellungInclude<ExtArgs> | null
    /**
     * Filter, which Bestellung to fetch.
     */
    where: BestellungWhereUniqueInput
  }

  /**
   * Bestellung findFirst
   */
  export type BestellungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellung
     */
    select?: BestellungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellung
     */
    omit?: BestellungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellungInclude<ExtArgs> | null
    /**
     * Filter, which Bestellung to fetch.
     */
    where?: BestellungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bestellungs to fetch.
     */
    orderBy?: BestellungOrderByWithRelationInput | BestellungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bestellungs.
     */
    cursor?: BestellungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bestellungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bestellungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bestellungs.
     */
    distinct?: BestellungScalarFieldEnum | BestellungScalarFieldEnum[]
  }

  /**
   * Bestellung findFirstOrThrow
   */
  export type BestellungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellung
     */
    select?: BestellungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellung
     */
    omit?: BestellungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellungInclude<ExtArgs> | null
    /**
     * Filter, which Bestellung to fetch.
     */
    where?: BestellungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bestellungs to fetch.
     */
    orderBy?: BestellungOrderByWithRelationInput | BestellungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bestellungs.
     */
    cursor?: BestellungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bestellungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bestellungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bestellungs.
     */
    distinct?: BestellungScalarFieldEnum | BestellungScalarFieldEnum[]
  }

  /**
   * Bestellung findMany
   */
  export type BestellungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellung
     */
    select?: BestellungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellung
     */
    omit?: BestellungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellungInclude<ExtArgs> | null
    /**
     * Filter, which Bestellungs to fetch.
     */
    where?: BestellungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bestellungs to fetch.
     */
    orderBy?: BestellungOrderByWithRelationInput | BestellungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bestellungs.
     */
    cursor?: BestellungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bestellungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bestellungs.
     */
    skip?: number
    distinct?: BestellungScalarFieldEnum | BestellungScalarFieldEnum[]
  }

  /**
   * Bestellung create
   */
  export type BestellungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellung
     */
    select?: BestellungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellung
     */
    omit?: BestellungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellungInclude<ExtArgs> | null
    /**
     * The data needed to create a Bestellung.
     */
    data: XOR<BestellungCreateInput, BestellungUncheckedCreateInput>
  }

  /**
   * Bestellung createMany
   */
  export type BestellungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bestellungs.
     */
    data: BestellungCreateManyInput | BestellungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bestellung createManyAndReturn
   */
  export type BestellungCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellung
     */
    select?: BestellungSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellung
     */
    omit?: BestellungOmit<ExtArgs> | null
    /**
     * The data used to create many Bestellungs.
     */
    data: BestellungCreateManyInput | BestellungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bestellung update
   */
  export type BestellungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellung
     */
    select?: BestellungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellung
     */
    omit?: BestellungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellungInclude<ExtArgs> | null
    /**
     * The data needed to update a Bestellung.
     */
    data: XOR<BestellungUpdateInput, BestellungUncheckedUpdateInput>
    /**
     * Choose, which Bestellung to update.
     */
    where: BestellungWhereUniqueInput
  }

  /**
   * Bestellung updateMany
   */
  export type BestellungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bestellungs.
     */
    data: XOR<BestellungUpdateManyMutationInput, BestellungUncheckedUpdateManyInput>
    /**
     * Filter which Bestellungs to update
     */
    where?: BestellungWhereInput
    /**
     * Limit how many Bestellungs to update.
     */
    limit?: number
  }

  /**
   * Bestellung updateManyAndReturn
   */
  export type BestellungUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellung
     */
    select?: BestellungSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellung
     */
    omit?: BestellungOmit<ExtArgs> | null
    /**
     * The data used to update Bestellungs.
     */
    data: XOR<BestellungUpdateManyMutationInput, BestellungUncheckedUpdateManyInput>
    /**
     * Filter which Bestellungs to update
     */
    where?: BestellungWhereInput
    /**
     * Limit how many Bestellungs to update.
     */
    limit?: number
  }

  /**
   * Bestellung upsert
   */
  export type BestellungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellung
     */
    select?: BestellungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellung
     */
    omit?: BestellungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellungInclude<ExtArgs> | null
    /**
     * The filter to search for the Bestellung to update in case it exists.
     */
    where: BestellungWhereUniqueInput
    /**
     * In case the Bestellung found by the `where` argument doesn't exist, create a new Bestellung with this data.
     */
    create: XOR<BestellungCreateInput, BestellungUncheckedCreateInput>
    /**
     * In case the Bestellung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BestellungUpdateInput, BestellungUncheckedUpdateInput>
  }

  /**
   * Bestellung delete
   */
  export type BestellungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellung
     */
    select?: BestellungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellung
     */
    omit?: BestellungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellungInclude<ExtArgs> | null
    /**
     * Filter which Bestellung to delete.
     */
    where: BestellungWhereUniqueInput
  }

  /**
   * Bestellung deleteMany
   */
  export type BestellungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bestellungs to delete
     */
    where?: BestellungWhereInput
    /**
     * Limit how many Bestellungs to delete.
     */
    limit?: number
  }

  /**
   * Bestellung.postens
   */
  export type Bestellung$postensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellposten
     */
    select?: BestellpostenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellposten
     */
    omit?: BestellpostenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellpostenInclude<ExtArgs> | null
    where?: BestellpostenWhereInput
    orderBy?: BestellpostenOrderByWithRelationInput | BestellpostenOrderByWithRelationInput[]
    cursor?: BestellpostenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BestellpostenScalarFieldEnum | BestellpostenScalarFieldEnum[]
  }

  /**
   * Bestellung without action
   */
  export type BestellungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellung
     */
    select?: BestellungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellung
     */
    omit?: BestellungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellungInclude<ExtArgs> | null
  }


  /**
   * Model Bestellposten
   */

  export type AggregateBestellposten = {
    _count: BestellpostenCountAggregateOutputType | null
    _avg: BestellpostenAvgAggregateOutputType | null
    _sum: BestellpostenSumAggregateOutputType | null
    _min: BestellpostenMinAggregateOutputType | null
    _max: BestellpostenMaxAggregateOutputType | null
  }

  export type BestellpostenAvgAggregateOutputType = {
    id: number | null
    bestellungId: number | null
    productId: number | null
    quantity: number | null
    einzelpreis: Decimal | null
  }

  export type BestellpostenSumAggregateOutputType = {
    id: number | null
    bestellungId: number | null
    productId: number | null
    quantity: number | null
    einzelpreis: Decimal | null
  }

  export type BestellpostenMinAggregateOutputType = {
    id: number | null
    bestellungId: number | null
    productId: number | null
    quantity: number | null
    einzelpreis: Decimal | null
  }

  export type BestellpostenMaxAggregateOutputType = {
    id: number | null
    bestellungId: number | null
    productId: number | null
    quantity: number | null
    einzelpreis: Decimal | null
  }

  export type BestellpostenCountAggregateOutputType = {
    id: number
    bestellungId: number
    productId: number
    quantity: number
    einzelpreis: number
    _all: number
  }


  export type BestellpostenAvgAggregateInputType = {
    id?: true
    bestellungId?: true
    productId?: true
    quantity?: true
    einzelpreis?: true
  }

  export type BestellpostenSumAggregateInputType = {
    id?: true
    bestellungId?: true
    productId?: true
    quantity?: true
    einzelpreis?: true
  }

  export type BestellpostenMinAggregateInputType = {
    id?: true
    bestellungId?: true
    productId?: true
    quantity?: true
    einzelpreis?: true
  }

  export type BestellpostenMaxAggregateInputType = {
    id?: true
    bestellungId?: true
    productId?: true
    quantity?: true
    einzelpreis?: true
  }

  export type BestellpostenCountAggregateInputType = {
    id?: true
    bestellungId?: true
    productId?: true
    quantity?: true
    einzelpreis?: true
    _all?: true
  }

  export type BestellpostenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bestellposten to aggregate.
     */
    where?: BestellpostenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bestellpostens to fetch.
     */
    orderBy?: BestellpostenOrderByWithRelationInput | BestellpostenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BestellpostenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bestellpostens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bestellpostens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bestellpostens
    **/
    _count?: true | BestellpostenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BestellpostenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BestellpostenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BestellpostenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BestellpostenMaxAggregateInputType
  }

  export type GetBestellpostenAggregateType<T extends BestellpostenAggregateArgs> = {
        [P in keyof T & keyof AggregateBestellposten]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBestellposten[P]>
      : GetScalarType<T[P], AggregateBestellposten[P]>
  }




  export type BestellpostenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BestellpostenWhereInput
    orderBy?: BestellpostenOrderByWithAggregationInput | BestellpostenOrderByWithAggregationInput[]
    by: BestellpostenScalarFieldEnum[] | BestellpostenScalarFieldEnum
    having?: BestellpostenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BestellpostenCountAggregateInputType | true
    _avg?: BestellpostenAvgAggregateInputType
    _sum?: BestellpostenSumAggregateInputType
    _min?: BestellpostenMinAggregateInputType
    _max?: BestellpostenMaxAggregateInputType
  }

  export type BestellpostenGroupByOutputType = {
    id: number
    bestellungId: number
    productId: number
    quantity: number
    einzelpreis: Decimal
    _count: BestellpostenCountAggregateOutputType | null
    _avg: BestellpostenAvgAggregateOutputType | null
    _sum: BestellpostenSumAggregateOutputType | null
    _min: BestellpostenMinAggregateOutputType | null
    _max: BestellpostenMaxAggregateOutputType | null
  }

  type GetBestellpostenGroupByPayload<T extends BestellpostenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BestellpostenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BestellpostenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BestellpostenGroupByOutputType[P]>
            : GetScalarType<T[P], BestellpostenGroupByOutputType[P]>
        }
      >
    >


  export type BestellpostenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bestellungId?: boolean
    productId?: boolean
    quantity?: boolean
    einzelpreis?: boolean
    bestellung?: boolean | BestellungDefaultArgs<ExtArgs>
    product?: boolean | ProdukteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bestellposten"]>

  export type BestellpostenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bestellungId?: boolean
    productId?: boolean
    quantity?: boolean
    einzelpreis?: boolean
    bestellung?: boolean | BestellungDefaultArgs<ExtArgs>
    product?: boolean | ProdukteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bestellposten"]>

  export type BestellpostenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bestellungId?: boolean
    productId?: boolean
    quantity?: boolean
    einzelpreis?: boolean
    bestellung?: boolean | BestellungDefaultArgs<ExtArgs>
    product?: boolean | ProdukteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bestellposten"]>

  export type BestellpostenSelectScalar = {
    id?: boolean
    bestellungId?: boolean
    productId?: boolean
    quantity?: boolean
    einzelpreis?: boolean
  }

  export type BestellpostenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bestellungId" | "productId" | "quantity" | "einzelpreis", ExtArgs["result"]["bestellposten"]>
  export type BestellpostenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bestellung?: boolean | BestellungDefaultArgs<ExtArgs>
    product?: boolean | ProdukteDefaultArgs<ExtArgs>
  }
  export type BestellpostenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bestellung?: boolean | BestellungDefaultArgs<ExtArgs>
    product?: boolean | ProdukteDefaultArgs<ExtArgs>
  }
  export type BestellpostenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bestellung?: boolean | BestellungDefaultArgs<ExtArgs>
    product?: boolean | ProdukteDefaultArgs<ExtArgs>
  }

  export type $BestellpostenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bestellposten"
    objects: {
      bestellung: Prisma.$BestellungPayload<ExtArgs>
      product: Prisma.$ProduktePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bestellungId: number
      productId: number
      quantity: number
      einzelpreis: Prisma.Decimal
    }, ExtArgs["result"]["bestellposten"]>
    composites: {}
  }

  type BestellpostenGetPayload<S extends boolean | null | undefined | BestellpostenDefaultArgs> = $Result.GetResult<Prisma.$BestellpostenPayload, S>

  type BestellpostenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BestellpostenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BestellpostenCountAggregateInputType | true
    }

  export interface BestellpostenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bestellposten'], meta: { name: 'Bestellposten' } }
    /**
     * Find zero or one Bestellposten that matches the filter.
     * @param {BestellpostenFindUniqueArgs} args - Arguments to find a Bestellposten
     * @example
     * // Get one Bestellposten
     * const bestellposten = await prisma.bestellposten.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BestellpostenFindUniqueArgs>(args: SelectSubset<T, BestellpostenFindUniqueArgs<ExtArgs>>): Prisma__BestellpostenClient<$Result.GetResult<Prisma.$BestellpostenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bestellposten that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BestellpostenFindUniqueOrThrowArgs} args - Arguments to find a Bestellposten
     * @example
     * // Get one Bestellposten
     * const bestellposten = await prisma.bestellposten.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BestellpostenFindUniqueOrThrowArgs>(args: SelectSubset<T, BestellpostenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BestellpostenClient<$Result.GetResult<Prisma.$BestellpostenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bestellposten that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BestellpostenFindFirstArgs} args - Arguments to find a Bestellposten
     * @example
     * // Get one Bestellposten
     * const bestellposten = await prisma.bestellposten.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BestellpostenFindFirstArgs>(args?: SelectSubset<T, BestellpostenFindFirstArgs<ExtArgs>>): Prisma__BestellpostenClient<$Result.GetResult<Prisma.$BestellpostenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bestellposten that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BestellpostenFindFirstOrThrowArgs} args - Arguments to find a Bestellposten
     * @example
     * // Get one Bestellposten
     * const bestellposten = await prisma.bestellposten.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BestellpostenFindFirstOrThrowArgs>(args?: SelectSubset<T, BestellpostenFindFirstOrThrowArgs<ExtArgs>>): Prisma__BestellpostenClient<$Result.GetResult<Prisma.$BestellpostenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bestellpostens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BestellpostenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bestellpostens
     * const bestellpostens = await prisma.bestellposten.findMany()
     * 
     * // Get first 10 Bestellpostens
     * const bestellpostens = await prisma.bestellposten.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bestellpostenWithIdOnly = await prisma.bestellposten.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BestellpostenFindManyArgs>(args?: SelectSubset<T, BestellpostenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BestellpostenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bestellposten.
     * @param {BestellpostenCreateArgs} args - Arguments to create a Bestellposten.
     * @example
     * // Create one Bestellposten
     * const Bestellposten = await prisma.bestellposten.create({
     *   data: {
     *     // ... data to create a Bestellposten
     *   }
     * })
     * 
     */
    create<T extends BestellpostenCreateArgs>(args: SelectSubset<T, BestellpostenCreateArgs<ExtArgs>>): Prisma__BestellpostenClient<$Result.GetResult<Prisma.$BestellpostenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bestellpostens.
     * @param {BestellpostenCreateManyArgs} args - Arguments to create many Bestellpostens.
     * @example
     * // Create many Bestellpostens
     * const bestellposten = await prisma.bestellposten.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BestellpostenCreateManyArgs>(args?: SelectSubset<T, BestellpostenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bestellpostens and returns the data saved in the database.
     * @param {BestellpostenCreateManyAndReturnArgs} args - Arguments to create many Bestellpostens.
     * @example
     * // Create many Bestellpostens
     * const bestellposten = await prisma.bestellposten.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bestellpostens and only return the `id`
     * const bestellpostenWithIdOnly = await prisma.bestellposten.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BestellpostenCreateManyAndReturnArgs>(args?: SelectSubset<T, BestellpostenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BestellpostenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bestellposten.
     * @param {BestellpostenDeleteArgs} args - Arguments to delete one Bestellposten.
     * @example
     * // Delete one Bestellposten
     * const Bestellposten = await prisma.bestellposten.delete({
     *   where: {
     *     // ... filter to delete one Bestellposten
     *   }
     * })
     * 
     */
    delete<T extends BestellpostenDeleteArgs>(args: SelectSubset<T, BestellpostenDeleteArgs<ExtArgs>>): Prisma__BestellpostenClient<$Result.GetResult<Prisma.$BestellpostenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bestellposten.
     * @param {BestellpostenUpdateArgs} args - Arguments to update one Bestellposten.
     * @example
     * // Update one Bestellposten
     * const bestellposten = await prisma.bestellposten.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BestellpostenUpdateArgs>(args: SelectSubset<T, BestellpostenUpdateArgs<ExtArgs>>): Prisma__BestellpostenClient<$Result.GetResult<Prisma.$BestellpostenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bestellpostens.
     * @param {BestellpostenDeleteManyArgs} args - Arguments to filter Bestellpostens to delete.
     * @example
     * // Delete a few Bestellpostens
     * const { count } = await prisma.bestellposten.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BestellpostenDeleteManyArgs>(args?: SelectSubset<T, BestellpostenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bestellpostens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BestellpostenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bestellpostens
     * const bestellposten = await prisma.bestellposten.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BestellpostenUpdateManyArgs>(args: SelectSubset<T, BestellpostenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bestellpostens and returns the data updated in the database.
     * @param {BestellpostenUpdateManyAndReturnArgs} args - Arguments to update many Bestellpostens.
     * @example
     * // Update many Bestellpostens
     * const bestellposten = await prisma.bestellposten.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bestellpostens and only return the `id`
     * const bestellpostenWithIdOnly = await prisma.bestellposten.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BestellpostenUpdateManyAndReturnArgs>(args: SelectSubset<T, BestellpostenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BestellpostenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bestellposten.
     * @param {BestellpostenUpsertArgs} args - Arguments to update or create a Bestellposten.
     * @example
     * // Update or create a Bestellposten
     * const bestellposten = await prisma.bestellposten.upsert({
     *   create: {
     *     // ... data to create a Bestellposten
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bestellposten we want to update
     *   }
     * })
     */
    upsert<T extends BestellpostenUpsertArgs>(args: SelectSubset<T, BestellpostenUpsertArgs<ExtArgs>>): Prisma__BestellpostenClient<$Result.GetResult<Prisma.$BestellpostenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bestellpostens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BestellpostenCountArgs} args - Arguments to filter Bestellpostens to count.
     * @example
     * // Count the number of Bestellpostens
     * const count = await prisma.bestellposten.count({
     *   where: {
     *     // ... the filter for the Bestellpostens we want to count
     *   }
     * })
    **/
    count<T extends BestellpostenCountArgs>(
      args?: Subset<T, BestellpostenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BestellpostenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bestellposten.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BestellpostenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BestellpostenAggregateArgs>(args: Subset<T, BestellpostenAggregateArgs>): Prisma.PrismaPromise<GetBestellpostenAggregateType<T>>

    /**
     * Group by Bestellposten.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BestellpostenGroupByArgs} args - Group by arguments.
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
      T extends BestellpostenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BestellpostenGroupByArgs['orderBy'] }
        : { orderBy?: BestellpostenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BestellpostenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBestellpostenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bestellposten model
   */
  readonly fields: BestellpostenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bestellposten.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BestellpostenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bestellung<T extends BestellungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BestellungDefaultArgs<ExtArgs>>): Prisma__BestellungClient<$Result.GetResult<Prisma.$BestellungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProdukteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdukteDefaultArgs<ExtArgs>>): Prisma__ProdukteClient<$Result.GetResult<Prisma.$ProduktePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bestellposten model
   */
  interface BestellpostenFieldRefs {
    readonly id: FieldRef<"Bestellposten", 'Int'>
    readonly bestellungId: FieldRef<"Bestellposten", 'Int'>
    readonly productId: FieldRef<"Bestellposten", 'Int'>
    readonly quantity: FieldRef<"Bestellposten", 'Int'>
    readonly einzelpreis: FieldRef<"Bestellposten", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Bestellposten findUnique
   */
  export type BestellpostenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellposten
     */
    select?: BestellpostenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellposten
     */
    omit?: BestellpostenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellpostenInclude<ExtArgs> | null
    /**
     * Filter, which Bestellposten to fetch.
     */
    where: BestellpostenWhereUniqueInput
  }

  /**
   * Bestellposten findUniqueOrThrow
   */
  export type BestellpostenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellposten
     */
    select?: BestellpostenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellposten
     */
    omit?: BestellpostenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellpostenInclude<ExtArgs> | null
    /**
     * Filter, which Bestellposten to fetch.
     */
    where: BestellpostenWhereUniqueInput
  }

  /**
   * Bestellposten findFirst
   */
  export type BestellpostenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellposten
     */
    select?: BestellpostenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellposten
     */
    omit?: BestellpostenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellpostenInclude<ExtArgs> | null
    /**
     * Filter, which Bestellposten to fetch.
     */
    where?: BestellpostenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bestellpostens to fetch.
     */
    orderBy?: BestellpostenOrderByWithRelationInput | BestellpostenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bestellpostens.
     */
    cursor?: BestellpostenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bestellpostens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bestellpostens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bestellpostens.
     */
    distinct?: BestellpostenScalarFieldEnum | BestellpostenScalarFieldEnum[]
  }

  /**
   * Bestellposten findFirstOrThrow
   */
  export type BestellpostenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellposten
     */
    select?: BestellpostenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellposten
     */
    omit?: BestellpostenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellpostenInclude<ExtArgs> | null
    /**
     * Filter, which Bestellposten to fetch.
     */
    where?: BestellpostenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bestellpostens to fetch.
     */
    orderBy?: BestellpostenOrderByWithRelationInput | BestellpostenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bestellpostens.
     */
    cursor?: BestellpostenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bestellpostens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bestellpostens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bestellpostens.
     */
    distinct?: BestellpostenScalarFieldEnum | BestellpostenScalarFieldEnum[]
  }

  /**
   * Bestellposten findMany
   */
  export type BestellpostenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellposten
     */
    select?: BestellpostenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellposten
     */
    omit?: BestellpostenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellpostenInclude<ExtArgs> | null
    /**
     * Filter, which Bestellpostens to fetch.
     */
    where?: BestellpostenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bestellpostens to fetch.
     */
    orderBy?: BestellpostenOrderByWithRelationInput | BestellpostenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bestellpostens.
     */
    cursor?: BestellpostenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bestellpostens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bestellpostens.
     */
    skip?: number
    distinct?: BestellpostenScalarFieldEnum | BestellpostenScalarFieldEnum[]
  }

  /**
   * Bestellposten create
   */
  export type BestellpostenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellposten
     */
    select?: BestellpostenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellposten
     */
    omit?: BestellpostenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellpostenInclude<ExtArgs> | null
    /**
     * The data needed to create a Bestellposten.
     */
    data: XOR<BestellpostenCreateInput, BestellpostenUncheckedCreateInput>
  }

  /**
   * Bestellposten createMany
   */
  export type BestellpostenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bestellpostens.
     */
    data: BestellpostenCreateManyInput | BestellpostenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bestellposten createManyAndReturn
   */
  export type BestellpostenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellposten
     */
    select?: BestellpostenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellposten
     */
    omit?: BestellpostenOmit<ExtArgs> | null
    /**
     * The data used to create many Bestellpostens.
     */
    data: BestellpostenCreateManyInput | BestellpostenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellpostenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bestellposten update
   */
  export type BestellpostenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellposten
     */
    select?: BestellpostenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellposten
     */
    omit?: BestellpostenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellpostenInclude<ExtArgs> | null
    /**
     * The data needed to update a Bestellposten.
     */
    data: XOR<BestellpostenUpdateInput, BestellpostenUncheckedUpdateInput>
    /**
     * Choose, which Bestellposten to update.
     */
    where: BestellpostenWhereUniqueInput
  }

  /**
   * Bestellposten updateMany
   */
  export type BestellpostenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bestellpostens.
     */
    data: XOR<BestellpostenUpdateManyMutationInput, BestellpostenUncheckedUpdateManyInput>
    /**
     * Filter which Bestellpostens to update
     */
    where?: BestellpostenWhereInput
    /**
     * Limit how many Bestellpostens to update.
     */
    limit?: number
  }

  /**
   * Bestellposten updateManyAndReturn
   */
  export type BestellpostenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellposten
     */
    select?: BestellpostenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellposten
     */
    omit?: BestellpostenOmit<ExtArgs> | null
    /**
     * The data used to update Bestellpostens.
     */
    data: XOR<BestellpostenUpdateManyMutationInput, BestellpostenUncheckedUpdateManyInput>
    /**
     * Filter which Bestellpostens to update
     */
    where?: BestellpostenWhereInput
    /**
     * Limit how many Bestellpostens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellpostenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bestellposten upsert
   */
  export type BestellpostenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellposten
     */
    select?: BestellpostenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellposten
     */
    omit?: BestellpostenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellpostenInclude<ExtArgs> | null
    /**
     * The filter to search for the Bestellposten to update in case it exists.
     */
    where: BestellpostenWhereUniqueInput
    /**
     * In case the Bestellposten found by the `where` argument doesn't exist, create a new Bestellposten with this data.
     */
    create: XOR<BestellpostenCreateInput, BestellpostenUncheckedCreateInput>
    /**
     * In case the Bestellposten was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BestellpostenUpdateInput, BestellpostenUncheckedUpdateInput>
  }

  /**
   * Bestellposten delete
   */
  export type BestellpostenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellposten
     */
    select?: BestellpostenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellposten
     */
    omit?: BestellpostenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellpostenInclude<ExtArgs> | null
    /**
     * Filter which Bestellposten to delete.
     */
    where: BestellpostenWhereUniqueInput
  }

  /**
   * Bestellposten deleteMany
   */
  export type BestellpostenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bestellpostens to delete
     */
    where?: BestellpostenWhereInput
    /**
     * Limit how many Bestellpostens to delete.
     */
    limit?: number
  }

  /**
   * Bestellposten without action
   */
  export type BestellpostenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bestellposten
     */
    select?: BestellpostenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bestellposten
     */
    omit?: BestellpostenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BestellpostenInclude<ExtArgs> | null
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


  export const ProdukteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    imgsrc: 'imgsrc'
  };

  export type ProdukteScalarFieldEnum = (typeof ProdukteScalarFieldEnum)[keyof typeof ProdukteScalarFieldEnum]


  export const WarenkorbScalarFieldEnum: {
    id: 'id',
    sessionid: 'sessionid',
    productid: 'productid',
    quantity: 'quantity'
  };

  export type WarenkorbScalarFieldEnum = (typeof WarenkorbScalarFieldEnum)[keyof typeof WarenkorbScalarFieldEnum]


  export const BestellungScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    sessionid: 'sessionid',
    gesamtpreis: 'gesamtpreis'
  };

  export type BestellungScalarFieldEnum = (typeof BestellungScalarFieldEnum)[keyof typeof BestellungScalarFieldEnum]


  export const BestellpostenScalarFieldEnum: {
    id: 'id',
    bestellungId: 'bestellungId',
    productId: 'productId',
    quantity: 'quantity',
    einzelpreis: 'einzelpreis'
  };

  export type BestellpostenScalarFieldEnum = (typeof BestellpostenScalarFieldEnum)[keyof typeof BestellpostenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProdukteWhereInput = {
    AND?: ProdukteWhereInput | ProdukteWhereInput[]
    OR?: ProdukteWhereInput[]
    NOT?: ProdukteWhereInput | ProdukteWhereInput[]
    id?: IntFilter<"Produkte"> | number
    name?: StringFilter<"Produkte"> | string
    price?: DecimalFilter<"Produkte"> | Decimal | DecimalJsLike | number | string
    imgsrc?: StringFilter<"Produkte"> | string
    Warenkorb?: WarenkorbListRelationFilter
    Bestellposten?: BestellpostenListRelationFilter
  }

  export type ProdukteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    imgsrc?: SortOrder
    Warenkorb?: WarenkorbOrderByRelationAggregateInput
    Bestellposten?: BestellpostenOrderByRelationAggregateInput
  }

  export type ProdukteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdukteWhereInput | ProdukteWhereInput[]
    OR?: ProdukteWhereInput[]
    NOT?: ProdukteWhereInput | ProdukteWhereInput[]
    name?: StringFilter<"Produkte"> | string
    price?: DecimalFilter<"Produkte"> | Decimal | DecimalJsLike | number | string
    imgsrc?: StringFilter<"Produkte"> | string
    Warenkorb?: WarenkorbListRelationFilter
    Bestellposten?: BestellpostenListRelationFilter
  }, "id">

  export type ProdukteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    imgsrc?: SortOrder
    _count?: ProdukteCountOrderByAggregateInput
    _avg?: ProdukteAvgOrderByAggregateInput
    _max?: ProdukteMaxOrderByAggregateInput
    _min?: ProdukteMinOrderByAggregateInput
    _sum?: ProdukteSumOrderByAggregateInput
  }

  export type ProdukteScalarWhereWithAggregatesInput = {
    AND?: ProdukteScalarWhereWithAggregatesInput | ProdukteScalarWhereWithAggregatesInput[]
    OR?: ProdukteScalarWhereWithAggregatesInput[]
    NOT?: ProdukteScalarWhereWithAggregatesInput | ProdukteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produkte"> | number
    name?: StringWithAggregatesFilter<"Produkte"> | string
    price?: DecimalWithAggregatesFilter<"Produkte"> | Decimal | DecimalJsLike | number | string
    imgsrc?: StringWithAggregatesFilter<"Produkte"> | string
  }

  export type WarenkorbWhereInput = {
    AND?: WarenkorbWhereInput | WarenkorbWhereInput[]
    OR?: WarenkorbWhereInput[]
    NOT?: WarenkorbWhereInput | WarenkorbWhereInput[]
    id?: IntFilter<"Warenkorb"> | number
    sessionid?: StringFilter<"Warenkorb"> | string
    productid?: IntFilter<"Warenkorb"> | number
    quantity?: IntFilter<"Warenkorb"> | number
    product?: XOR<ProdukteScalarRelationFilter, ProdukteWhereInput>
  }

  export type WarenkorbOrderByWithRelationInput = {
    id?: SortOrder
    sessionid?: SortOrder
    productid?: SortOrder
    quantity?: SortOrder
    product?: ProdukteOrderByWithRelationInput
  }

  export type WarenkorbWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sessionid_productid?: WarenkorbSessionidProductidCompoundUniqueInput
    AND?: WarenkorbWhereInput | WarenkorbWhereInput[]
    OR?: WarenkorbWhereInput[]
    NOT?: WarenkorbWhereInput | WarenkorbWhereInput[]
    sessionid?: StringFilter<"Warenkorb"> | string
    productid?: IntFilter<"Warenkorb"> | number
    quantity?: IntFilter<"Warenkorb"> | number
    product?: XOR<ProdukteScalarRelationFilter, ProdukteWhereInput>
  }, "id" | "sessionid_productid">

  export type WarenkorbOrderByWithAggregationInput = {
    id?: SortOrder
    sessionid?: SortOrder
    productid?: SortOrder
    quantity?: SortOrder
    _count?: WarenkorbCountOrderByAggregateInput
    _avg?: WarenkorbAvgOrderByAggregateInput
    _max?: WarenkorbMaxOrderByAggregateInput
    _min?: WarenkorbMinOrderByAggregateInput
    _sum?: WarenkorbSumOrderByAggregateInput
  }

  export type WarenkorbScalarWhereWithAggregatesInput = {
    AND?: WarenkorbScalarWhereWithAggregatesInput | WarenkorbScalarWhereWithAggregatesInput[]
    OR?: WarenkorbScalarWhereWithAggregatesInput[]
    NOT?: WarenkorbScalarWhereWithAggregatesInput | WarenkorbScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Warenkorb"> | number
    sessionid?: StringWithAggregatesFilter<"Warenkorb"> | string
    productid?: IntWithAggregatesFilter<"Warenkorb"> | number
    quantity?: IntWithAggregatesFilter<"Warenkorb"> | number
  }

  export type BestellungWhereInput = {
    AND?: BestellungWhereInput | BestellungWhereInput[]
    OR?: BestellungWhereInput[]
    NOT?: BestellungWhereInput | BestellungWhereInput[]
    id?: IntFilter<"Bestellung"> | number
    createdAt?: DateTimeFilter<"Bestellung"> | Date | string
    sessionid?: StringFilter<"Bestellung"> | string
    gesamtpreis?: DecimalFilter<"Bestellung"> | Decimal | DecimalJsLike | number | string
    postens?: BestellpostenListRelationFilter
  }

  export type BestellungOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    sessionid?: SortOrder
    gesamtpreis?: SortOrder
    postens?: BestellpostenOrderByRelationAggregateInput
  }

  export type BestellungWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BestellungWhereInput | BestellungWhereInput[]
    OR?: BestellungWhereInput[]
    NOT?: BestellungWhereInput | BestellungWhereInput[]
    createdAt?: DateTimeFilter<"Bestellung"> | Date | string
    sessionid?: StringFilter<"Bestellung"> | string
    gesamtpreis?: DecimalFilter<"Bestellung"> | Decimal | DecimalJsLike | number | string
    postens?: BestellpostenListRelationFilter
  }, "id">

  export type BestellungOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    sessionid?: SortOrder
    gesamtpreis?: SortOrder
    _count?: BestellungCountOrderByAggregateInput
    _avg?: BestellungAvgOrderByAggregateInput
    _max?: BestellungMaxOrderByAggregateInput
    _min?: BestellungMinOrderByAggregateInput
    _sum?: BestellungSumOrderByAggregateInput
  }

  export type BestellungScalarWhereWithAggregatesInput = {
    AND?: BestellungScalarWhereWithAggregatesInput | BestellungScalarWhereWithAggregatesInput[]
    OR?: BestellungScalarWhereWithAggregatesInput[]
    NOT?: BestellungScalarWhereWithAggregatesInput | BestellungScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bestellung"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Bestellung"> | Date | string
    sessionid?: StringWithAggregatesFilter<"Bestellung"> | string
    gesamtpreis?: DecimalWithAggregatesFilter<"Bestellung"> | Decimal | DecimalJsLike | number | string
  }

  export type BestellpostenWhereInput = {
    AND?: BestellpostenWhereInput | BestellpostenWhereInput[]
    OR?: BestellpostenWhereInput[]
    NOT?: BestellpostenWhereInput | BestellpostenWhereInput[]
    id?: IntFilter<"Bestellposten"> | number
    bestellungId?: IntFilter<"Bestellposten"> | number
    productId?: IntFilter<"Bestellposten"> | number
    quantity?: IntFilter<"Bestellposten"> | number
    einzelpreis?: DecimalFilter<"Bestellposten"> | Decimal | DecimalJsLike | number | string
    bestellung?: XOR<BestellungScalarRelationFilter, BestellungWhereInput>
    product?: XOR<ProdukteScalarRelationFilter, ProdukteWhereInput>
  }

  export type BestellpostenOrderByWithRelationInput = {
    id?: SortOrder
    bestellungId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    einzelpreis?: SortOrder
    bestellung?: BestellungOrderByWithRelationInput
    product?: ProdukteOrderByWithRelationInput
  }

  export type BestellpostenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BestellpostenWhereInput | BestellpostenWhereInput[]
    OR?: BestellpostenWhereInput[]
    NOT?: BestellpostenWhereInput | BestellpostenWhereInput[]
    bestellungId?: IntFilter<"Bestellposten"> | number
    productId?: IntFilter<"Bestellposten"> | number
    quantity?: IntFilter<"Bestellposten"> | number
    einzelpreis?: DecimalFilter<"Bestellposten"> | Decimal | DecimalJsLike | number | string
    bestellung?: XOR<BestellungScalarRelationFilter, BestellungWhereInput>
    product?: XOR<ProdukteScalarRelationFilter, ProdukteWhereInput>
  }, "id">

  export type BestellpostenOrderByWithAggregationInput = {
    id?: SortOrder
    bestellungId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    einzelpreis?: SortOrder
    _count?: BestellpostenCountOrderByAggregateInput
    _avg?: BestellpostenAvgOrderByAggregateInput
    _max?: BestellpostenMaxOrderByAggregateInput
    _min?: BestellpostenMinOrderByAggregateInput
    _sum?: BestellpostenSumOrderByAggregateInput
  }

  export type BestellpostenScalarWhereWithAggregatesInput = {
    AND?: BestellpostenScalarWhereWithAggregatesInput | BestellpostenScalarWhereWithAggregatesInput[]
    OR?: BestellpostenScalarWhereWithAggregatesInput[]
    NOT?: BestellpostenScalarWhereWithAggregatesInput | BestellpostenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bestellposten"> | number
    bestellungId?: IntWithAggregatesFilter<"Bestellposten"> | number
    productId?: IntWithAggregatesFilter<"Bestellposten"> | number
    quantity?: IntWithAggregatesFilter<"Bestellposten"> | number
    einzelpreis?: DecimalWithAggregatesFilter<"Bestellposten"> | Decimal | DecimalJsLike | number | string
  }

  export type ProdukteCreateInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    imgsrc: string
    Warenkorb?: WarenkorbCreateNestedManyWithoutProductInput
    Bestellposten?: BestellpostenCreateNestedManyWithoutProductInput
  }

  export type ProdukteUncheckedCreateInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    imgsrc: string
    Warenkorb?: WarenkorbUncheckedCreateNestedManyWithoutProductInput
    Bestellposten?: BestellpostenUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProdukteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imgsrc?: StringFieldUpdateOperationsInput | string
    Warenkorb?: WarenkorbUpdateManyWithoutProductNestedInput
    Bestellposten?: BestellpostenUpdateManyWithoutProductNestedInput
  }

  export type ProdukteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imgsrc?: StringFieldUpdateOperationsInput | string
    Warenkorb?: WarenkorbUncheckedUpdateManyWithoutProductNestedInput
    Bestellposten?: BestellpostenUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProdukteCreateManyInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    imgsrc: string
  }

  export type ProdukteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imgsrc?: StringFieldUpdateOperationsInput | string
  }

  export type ProdukteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imgsrc?: StringFieldUpdateOperationsInput | string
  }

  export type WarenkorbCreateInput = {
    sessionid: string
    quantity: number
    product: ProdukteCreateNestedOneWithoutWarenkorbInput
  }

  export type WarenkorbUncheckedCreateInput = {
    id?: number
    sessionid: string
    productid: number
    quantity: number
  }

  export type WarenkorbUpdateInput = {
    sessionid?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProdukteUpdateOneRequiredWithoutWarenkorbNestedInput
  }

  export type WarenkorbUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionid?: StringFieldUpdateOperationsInput | string
    productid?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type WarenkorbCreateManyInput = {
    id?: number
    sessionid: string
    productid: number
    quantity: number
  }

  export type WarenkorbUpdateManyMutationInput = {
    sessionid?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type WarenkorbUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionid?: StringFieldUpdateOperationsInput | string
    productid?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BestellungCreateInput = {
    createdAt?: Date | string
    sessionid: string
    gesamtpreis: Decimal | DecimalJsLike | number | string
    postens?: BestellpostenCreateNestedManyWithoutBestellungInput
  }

  export type BestellungUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    sessionid: string
    gesamtpreis: Decimal | DecimalJsLike | number | string
    postens?: BestellpostenUncheckedCreateNestedManyWithoutBestellungInput
  }

  export type BestellungUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionid?: StringFieldUpdateOperationsInput | string
    gesamtpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    postens?: BestellpostenUpdateManyWithoutBestellungNestedInput
  }

  export type BestellungUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionid?: StringFieldUpdateOperationsInput | string
    gesamtpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    postens?: BestellpostenUncheckedUpdateManyWithoutBestellungNestedInput
  }

  export type BestellungCreateManyInput = {
    id?: number
    createdAt?: Date | string
    sessionid: string
    gesamtpreis: Decimal | DecimalJsLike | number | string
  }

  export type BestellungUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionid?: StringFieldUpdateOperationsInput | string
    gesamtpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BestellungUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionid?: StringFieldUpdateOperationsInput | string
    gesamtpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BestellpostenCreateInput = {
    quantity: number
    einzelpreis: Decimal | DecimalJsLike | number | string
    bestellung: BestellungCreateNestedOneWithoutPostensInput
    product: ProdukteCreateNestedOneWithoutBestellpostenInput
  }

  export type BestellpostenUncheckedCreateInput = {
    id?: number
    bestellungId: number
    productId: number
    quantity: number
    einzelpreis: Decimal | DecimalJsLike | number | string
  }

  export type BestellpostenUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    einzelpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bestellung?: BestellungUpdateOneRequiredWithoutPostensNestedInput
    product?: ProdukteUpdateOneRequiredWithoutBestellpostenNestedInput
  }

  export type BestellpostenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bestellungId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    einzelpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BestellpostenCreateManyInput = {
    id?: number
    bestellungId: number
    productId: number
    quantity: number
    einzelpreis: Decimal | DecimalJsLike | number | string
  }

  export type BestellpostenUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    einzelpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BestellpostenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bestellungId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    einzelpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type WarenkorbListRelationFilter = {
    every?: WarenkorbWhereInput
    some?: WarenkorbWhereInput
    none?: WarenkorbWhereInput
  }

  export type BestellpostenListRelationFilter = {
    every?: BestellpostenWhereInput
    some?: BestellpostenWhereInput
    none?: BestellpostenWhereInput
  }

  export type WarenkorbOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BestellpostenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdukteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    imgsrc?: SortOrder
  }

  export type ProdukteAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type ProdukteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    imgsrc?: SortOrder
  }

  export type ProdukteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    imgsrc?: SortOrder
  }

  export type ProdukteSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ProdukteScalarRelationFilter = {
    is?: ProdukteWhereInput
    isNot?: ProdukteWhereInput
  }

  export type WarenkorbSessionidProductidCompoundUniqueInput = {
    sessionid: string
    productid: number
  }

  export type WarenkorbCountOrderByAggregateInput = {
    id?: SortOrder
    sessionid?: SortOrder
    productid?: SortOrder
    quantity?: SortOrder
  }

  export type WarenkorbAvgOrderByAggregateInput = {
    id?: SortOrder
    productid?: SortOrder
    quantity?: SortOrder
  }

  export type WarenkorbMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionid?: SortOrder
    productid?: SortOrder
    quantity?: SortOrder
  }

  export type WarenkorbMinOrderByAggregateInput = {
    id?: SortOrder
    sessionid?: SortOrder
    productid?: SortOrder
    quantity?: SortOrder
  }

  export type WarenkorbSumOrderByAggregateInput = {
    id?: SortOrder
    productid?: SortOrder
    quantity?: SortOrder
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

  export type BestellungCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    sessionid?: SortOrder
    gesamtpreis?: SortOrder
  }

  export type BestellungAvgOrderByAggregateInput = {
    id?: SortOrder
    gesamtpreis?: SortOrder
  }

  export type BestellungMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    sessionid?: SortOrder
    gesamtpreis?: SortOrder
  }

  export type BestellungMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    sessionid?: SortOrder
    gesamtpreis?: SortOrder
  }

  export type BestellungSumOrderByAggregateInput = {
    id?: SortOrder
    gesamtpreis?: SortOrder
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

  export type BestellungScalarRelationFilter = {
    is?: BestellungWhereInput
    isNot?: BestellungWhereInput
  }

  export type BestellpostenCountOrderByAggregateInput = {
    id?: SortOrder
    bestellungId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    einzelpreis?: SortOrder
  }

  export type BestellpostenAvgOrderByAggregateInput = {
    id?: SortOrder
    bestellungId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    einzelpreis?: SortOrder
  }

  export type BestellpostenMaxOrderByAggregateInput = {
    id?: SortOrder
    bestellungId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    einzelpreis?: SortOrder
  }

  export type BestellpostenMinOrderByAggregateInput = {
    id?: SortOrder
    bestellungId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    einzelpreis?: SortOrder
  }

  export type BestellpostenSumOrderByAggregateInput = {
    id?: SortOrder
    bestellungId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    einzelpreis?: SortOrder
  }

  export type WarenkorbCreateNestedManyWithoutProductInput = {
    create?: XOR<WarenkorbCreateWithoutProductInput, WarenkorbUncheckedCreateWithoutProductInput> | WarenkorbCreateWithoutProductInput[] | WarenkorbUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WarenkorbCreateOrConnectWithoutProductInput | WarenkorbCreateOrConnectWithoutProductInput[]
    createMany?: WarenkorbCreateManyProductInputEnvelope
    connect?: WarenkorbWhereUniqueInput | WarenkorbWhereUniqueInput[]
  }

  export type BestellpostenCreateNestedManyWithoutProductInput = {
    create?: XOR<BestellpostenCreateWithoutProductInput, BestellpostenUncheckedCreateWithoutProductInput> | BestellpostenCreateWithoutProductInput[] | BestellpostenUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BestellpostenCreateOrConnectWithoutProductInput | BestellpostenCreateOrConnectWithoutProductInput[]
    createMany?: BestellpostenCreateManyProductInputEnvelope
    connect?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
  }

  export type WarenkorbUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<WarenkorbCreateWithoutProductInput, WarenkorbUncheckedCreateWithoutProductInput> | WarenkorbCreateWithoutProductInput[] | WarenkorbUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WarenkorbCreateOrConnectWithoutProductInput | WarenkorbCreateOrConnectWithoutProductInput[]
    createMany?: WarenkorbCreateManyProductInputEnvelope
    connect?: WarenkorbWhereUniqueInput | WarenkorbWhereUniqueInput[]
  }

  export type BestellpostenUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<BestellpostenCreateWithoutProductInput, BestellpostenUncheckedCreateWithoutProductInput> | BestellpostenCreateWithoutProductInput[] | BestellpostenUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BestellpostenCreateOrConnectWithoutProductInput | BestellpostenCreateOrConnectWithoutProductInput[]
    createMany?: BestellpostenCreateManyProductInputEnvelope
    connect?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type WarenkorbUpdateManyWithoutProductNestedInput = {
    create?: XOR<WarenkorbCreateWithoutProductInput, WarenkorbUncheckedCreateWithoutProductInput> | WarenkorbCreateWithoutProductInput[] | WarenkorbUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WarenkorbCreateOrConnectWithoutProductInput | WarenkorbCreateOrConnectWithoutProductInput[]
    upsert?: WarenkorbUpsertWithWhereUniqueWithoutProductInput | WarenkorbUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: WarenkorbCreateManyProductInputEnvelope
    set?: WarenkorbWhereUniqueInput | WarenkorbWhereUniqueInput[]
    disconnect?: WarenkorbWhereUniqueInput | WarenkorbWhereUniqueInput[]
    delete?: WarenkorbWhereUniqueInput | WarenkorbWhereUniqueInput[]
    connect?: WarenkorbWhereUniqueInput | WarenkorbWhereUniqueInput[]
    update?: WarenkorbUpdateWithWhereUniqueWithoutProductInput | WarenkorbUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: WarenkorbUpdateManyWithWhereWithoutProductInput | WarenkorbUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: WarenkorbScalarWhereInput | WarenkorbScalarWhereInput[]
  }

  export type BestellpostenUpdateManyWithoutProductNestedInput = {
    create?: XOR<BestellpostenCreateWithoutProductInput, BestellpostenUncheckedCreateWithoutProductInput> | BestellpostenCreateWithoutProductInput[] | BestellpostenUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BestellpostenCreateOrConnectWithoutProductInput | BestellpostenCreateOrConnectWithoutProductInput[]
    upsert?: BestellpostenUpsertWithWhereUniqueWithoutProductInput | BestellpostenUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: BestellpostenCreateManyProductInputEnvelope
    set?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
    disconnect?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
    delete?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
    connect?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
    update?: BestellpostenUpdateWithWhereUniqueWithoutProductInput | BestellpostenUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: BestellpostenUpdateManyWithWhereWithoutProductInput | BestellpostenUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: BestellpostenScalarWhereInput | BestellpostenScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WarenkorbUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<WarenkorbCreateWithoutProductInput, WarenkorbUncheckedCreateWithoutProductInput> | WarenkorbCreateWithoutProductInput[] | WarenkorbUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WarenkorbCreateOrConnectWithoutProductInput | WarenkorbCreateOrConnectWithoutProductInput[]
    upsert?: WarenkorbUpsertWithWhereUniqueWithoutProductInput | WarenkorbUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: WarenkorbCreateManyProductInputEnvelope
    set?: WarenkorbWhereUniqueInput | WarenkorbWhereUniqueInput[]
    disconnect?: WarenkorbWhereUniqueInput | WarenkorbWhereUniqueInput[]
    delete?: WarenkorbWhereUniqueInput | WarenkorbWhereUniqueInput[]
    connect?: WarenkorbWhereUniqueInput | WarenkorbWhereUniqueInput[]
    update?: WarenkorbUpdateWithWhereUniqueWithoutProductInput | WarenkorbUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: WarenkorbUpdateManyWithWhereWithoutProductInput | WarenkorbUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: WarenkorbScalarWhereInput | WarenkorbScalarWhereInput[]
  }

  export type BestellpostenUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<BestellpostenCreateWithoutProductInput, BestellpostenUncheckedCreateWithoutProductInput> | BestellpostenCreateWithoutProductInput[] | BestellpostenUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BestellpostenCreateOrConnectWithoutProductInput | BestellpostenCreateOrConnectWithoutProductInput[]
    upsert?: BestellpostenUpsertWithWhereUniqueWithoutProductInput | BestellpostenUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: BestellpostenCreateManyProductInputEnvelope
    set?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
    disconnect?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
    delete?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
    connect?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
    update?: BestellpostenUpdateWithWhereUniqueWithoutProductInput | BestellpostenUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: BestellpostenUpdateManyWithWhereWithoutProductInput | BestellpostenUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: BestellpostenScalarWhereInput | BestellpostenScalarWhereInput[]
  }

  export type ProdukteCreateNestedOneWithoutWarenkorbInput = {
    create?: XOR<ProdukteCreateWithoutWarenkorbInput, ProdukteUncheckedCreateWithoutWarenkorbInput>
    connectOrCreate?: ProdukteCreateOrConnectWithoutWarenkorbInput
    connect?: ProdukteWhereUniqueInput
  }

  export type ProdukteUpdateOneRequiredWithoutWarenkorbNestedInput = {
    create?: XOR<ProdukteCreateWithoutWarenkorbInput, ProdukteUncheckedCreateWithoutWarenkorbInput>
    connectOrCreate?: ProdukteCreateOrConnectWithoutWarenkorbInput
    upsert?: ProdukteUpsertWithoutWarenkorbInput
    connect?: ProdukteWhereUniqueInput
    update?: XOR<XOR<ProdukteUpdateToOneWithWhereWithoutWarenkorbInput, ProdukteUpdateWithoutWarenkorbInput>, ProdukteUncheckedUpdateWithoutWarenkorbInput>
  }

  export type BestellpostenCreateNestedManyWithoutBestellungInput = {
    create?: XOR<BestellpostenCreateWithoutBestellungInput, BestellpostenUncheckedCreateWithoutBestellungInput> | BestellpostenCreateWithoutBestellungInput[] | BestellpostenUncheckedCreateWithoutBestellungInput[]
    connectOrCreate?: BestellpostenCreateOrConnectWithoutBestellungInput | BestellpostenCreateOrConnectWithoutBestellungInput[]
    createMany?: BestellpostenCreateManyBestellungInputEnvelope
    connect?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
  }

  export type BestellpostenUncheckedCreateNestedManyWithoutBestellungInput = {
    create?: XOR<BestellpostenCreateWithoutBestellungInput, BestellpostenUncheckedCreateWithoutBestellungInput> | BestellpostenCreateWithoutBestellungInput[] | BestellpostenUncheckedCreateWithoutBestellungInput[]
    connectOrCreate?: BestellpostenCreateOrConnectWithoutBestellungInput | BestellpostenCreateOrConnectWithoutBestellungInput[]
    createMany?: BestellpostenCreateManyBestellungInputEnvelope
    connect?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BestellpostenUpdateManyWithoutBestellungNestedInput = {
    create?: XOR<BestellpostenCreateWithoutBestellungInput, BestellpostenUncheckedCreateWithoutBestellungInput> | BestellpostenCreateWithoutBestellungInput[] | BestellpostenUncheckedCreateWithoutBestellungInput[]
    connectOrCreate?: BestellpostenCreateOrConnectWithoutBestellungInput | BestellpostenCreateOrConnectWithoutBestellungInput[]
    upsert?: BestellpostenUpsertWithWhereUniqueWithoutBestellungInput | BestellpostenUpsertWithWhereUniqueWithoutBestellungInput[]
    createMany?: BestellpostenCreateManyBestellungInputEnvelope
    set?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
    disconnect?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
    delete?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
    connect?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
    update?: BestellpostenUpdateWithWhereUniqueWithoutBestellungInput | BestellpostenUpdateWithWhereUniqueWithoutBestellungInput[]
    updateMany?: BestellpostenUpdateManyWithWhereWithoutBestellungInput | BestellpostenUpdateManyWithWhereWithoutBestellungInput[]
    deleteMany?: BestellpostenScalarWhereInput | BestellpostenScalarWhereInput[]
  }

  export type BestellpostenUncheckedUpdateManyWithoutBestellungNestedInput = {
    create?: XOR<BestellpostenCreateWithoutBestellungInput, BestellpostenUncheckedCreateWithoutBestellungInput> | BestellpostenCreateWithoutBestellungInput[] | BestellpostenUncheckedCreateWithoutBestellungInput[]
    connectOrCreate?: BestellpostenCreateOrConnectWithoutBestellungInput | BestellpostenCreateOrConnectWithoutBestellungInput[]
    upsert?: BestellpostenUpsertWithWhereUniqueWithoutBestellungInput | BestellpostenUpsertWithWhereUniqueWithoutBestellungInput[]
    createMany?: BestellpostenCreateManyBestellungInputEnvelope
    set?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
    disconnect?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
    delete?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
    connect?: BestellpostenWhereUniqueInput | BestellpostenWhereUniqueInput[]
    update?: BestellpostenUpdateWithWhereUniqueWithoutBestellungInput | BestellpostenUpdateWithWhereUniqueWithoutBestellungInput[]
    updateMany?: BestellpostenUpdateManyWithWhereWithoutBestellungInput | BestellpostenUpdateManyWithWhereWithoutBestellungInput[]
    deleteMany?: BestellpostenScalarWhereInput | BestellpostenScalarWhereInput[]
  }

  export type BestellungCreateNestedOneWithoutPostensInput = {
    create?: XOR<BestellungCreateWithoutPostensInput, BestellungUncheckedCreateWithoutPostensInput>
    connectOrCreate?: BestellungCreateOrConnectWithoutPostensInput
    connect?: BestellungWhereUniqueInput
  }

  export type ProdukteCreateNestedOneWithoutBestellpostenInput = {
    create?: XOR<ProdukteCreateWithoutBestellpostenInput, ProdukteUncheckedCreateWithoutBestellpostenInput>
    connectOrCreate?: ProdukteCreateOrConnectWithoutBestellpostenInput
    connect?: ProdukteWhereUniqueInput
  }

  export type BestellungUpdateOneRequiredWithoutPostensNestedInput = {
    create?: XOR<BestellungCreateWithoutPostensInput, BestellungUncheckedCreateWithoutPostensInput>
    connectOrCreate?: BestellungCreateOrConnectWithoutPostensInput
    upsert?: BestellungUpsertWithoutPostensInput
    connect?: BestellungWhereUniqueInput
    update?: XOR<XOR<BestellungUpdateToOneWithWhereWithoutPostensInput, BestellungUpdateWithoutPostensInput>, BestellungUncheckedUpdateWithoutPostensInput>
  }

  export type ProdukteUpdateOneRequiredWithoutBestellpostenNestedInput = {
    create?: XOR<ProdukteCreateWithoutBestellpostenInput, ProdukteUncheckedCreateWithoutBestellpostenInput>
    connectOrCreate?: ProdukteCreateOrConnectWithoutBestellpostenInput
    upsert?: ProdukteUpsertWithoutBestellpostenInput
    connect?: ProdukteWhereUniqueInput
    update?: XOR<XOR<ProdukteUpdateToOneWithWhereWithoutBestellpostenInput, ProdukteUpdateWithoutBestellpostenInput>, ProdukteUncheckedUpdateWithoutBestellpostenInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type WarenkorbCreateWithoutProductInput = {
    sessionid: string
    quantity: number
  }

  export type WarenkorbUncheckedCreateWithoutProductInput = {
    id?: number
    sessionid: string
    quantity: number
  }

  export type WarenkorbCreateOrConnectWithoutProductInput = {
    where: WarenkorbWhereUniqueInput
    create: XOR<WarenkorbCreateWithoutProductInput, WarenkorbUncheckedCreateWithoutProductInput>
  }

  export type WarenkorbCreateManyProductInputEnvelope = {
    data: WarenkorbCreateManyProductInput | WarenkorbCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BestellpostenCreateWithoutProductInput = {
    quantity: number
    einzelpreis: Decimal | DecimalJsLike | number | string
    bestellung: BestellungCreateNestedOneWithoutPostensInput
  }

  export type BestellpostenUncheckedCreateWithoutProductInput = {
    id?: number
    bestellungId: number
    quantity: number
    einzelpreis: Decimal | DecimalJsLike | number | string
  }

  export type BestellpostenCreateOrConnectWithoutProductInput = {
    where: BestellpostenWhereUniqueInput
    create: XOR<BestellpostenCreateWithoutProductInput, BestellpostenUncheckedCreateWithoutProductInput>
  }

  export type BestellpostenCreateManyProductInputEnvelope = {
    data: BestellpostenCreateManyProductInput | BestellpostenCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type WarenkorbUpsertWithWhereUniqueWithoutProductInput = {
    where: WarenkorbWhereUniqueInput
    update: XOR<WarenkorbUpdateWithoutProductInput, WarenkorbUncheckedUpdateWithoutProductInput>
    create: XOR<WarenkorbCreateWithoutProductInput, WarenkorbUncheckedCreateWithoutProductInput>
  }

  export type WarenkorbUpdateWithWhereUniqueWithoutProductInput = {
    where: WarenkorbWhereUniqueInput
    data: XOR<WarenkorbUpdateWithoutProductInput, WarenkorbUncheckedUpdateWithoutProductInput>
  }

  export type WarenkorbUpdateManyWithWhereWithoutProductInput = {
    where: WarenkorbScalarWhereInput
    data: XOR<WarenkorbUpdateManyMutationInput, WarenkorbUncheckedUpdateManyWithoutProductInput>
  }

  export type WarenkorbScalarWhereInput = {
    AND?: WarenkorbScalarWhereInput | WarenkorbScalarWhereInput[]
    OR?: WarenkorbScalarWhereInput[]
    NOT?: WarenkorbScalarWhereInput | WarenkorbScalarWhereInput[]
    id?: IntFilter<"Warenkorb"> | number
    sessionid?: StringFilter<"Warenkorb"> | string
    productid?: IntFilter<"Warenkorb"> | number
    quantity?: IntFilter<"Warenkorb"> | number
  }

  export type BestellpostenUpsertWithWhereUniqueWithoutProductInput = {
    where: BestellpostenWhereUniqueInput
    update: XOR<BestellpostenUpdateWithoutProductInput, BestellpostenUncheckedUpdateWithoutProductInput>
    create: XOR<BestellpostenCreateWithoutProductInput, BestellpostenUncheckedCreateWithoutProductInput>
  }

  export type BestellpostenUpdateWithWhereUniqueWithoutProductInput = {
    where: BestellpostenWhereUniqueInput
    data: XOR<BestellpostenUpdateWithoutProductInput, BestellpostenUncheckedUpdateWithoutProductInput>
  }

  export type BestellpostenUpdateManyWithWhereWithoutProductInput = {
    where: BestellpostenScalarWhereInput
    data: XOR<BestellpostenUpdateManyMutationInput, BestellpostenUncheckedUpdateManyWithoutProductInput>
  }

  export type BestellpostenScalarWhereInput = {
    AND?: BestellpostenScalarWhereInput | BestellpostenScalarWhereInput[]
    OR?: BestellpostenScalarWhereInput[]
    NOT?: BestellpostenScalarWhereInput | BestellpostenScalarWhereInput[]
    id?: IntFilter<"Bestellposten"> | number
    bestellungId?: IntFilter<"Bestellposten"> | number
    productId?: IntFilter<"Bestellposten"> | number
    quantity?: IntFilter<"Bestellposten"> | number
    einzelpreis?: DecimalFilter<"Bestellposten"> | Decimal | DecimalJsLike | number | string
  }

  export type ProdukteCreateWithoutWarenkorbInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    imgsrc: string
    Bestellposten?: BestellpostenCreateNestedManyWithoutProductInput
  }

  export type ProdukteUncheckedCreateWithoutWarenkorbInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    imgsrc: string
    Bestellposten?: BestellpostenUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProdukteCreateOrConnectWithoutWarenkorbInput = {
    where: ProdukteWhereUniqueInput
    create: XOR<ProdukteCreateWithoutWarenkorbInput, ProdukteUncheckedCreateWithoutWarenkorbInput>
  }

  export type ProdukteUpsertWithoutWarenkorbInput = {
    update: XOR<ProdukteUpdateWithoutWarenkorbInput, ProdukteUncheckedUpdateWithoutWarenkorbInput>
    create: XOR<ProdukteCreateWithoutWarenkorbInput, ProdukteUncheckedCreateWithoutWarenkorbInput>
    where?: ProdukteWhereInput
  }

  export type ProdukteUpdateToOneWithWhereWithoutWarenkorbInput = {
    where?: ProdukteWhereInput
    data: XOR<ProdukteUpdateWithoutWarenkorbInput, ProdukteUncheckedUpdateWithoutWarenkorbInput>
  }

  export type ProdukteUpdateWithoutWarenkorbInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imgsrc?: StringFieldUpdateOperationsInput | string
    Bestellposten?: BestellpostenUpdateManyWithoutProductNestedInput
  }

  export type ProdukteUncheckedUpdateWithoutWarenkorbInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imgsrc?: StringFieldUpdateOperationsInput | string
    Bestellposten?: BestellpostenUncheckedUpdateManyWithoutProductNestedInput
  }

  export type BestellpostenCreateWithoutBestellungInput = {
    quantity: number
    einzelpreis: Decimal | DecimalJsLike | number | string
    product: ProdukteCreateNestedOneWithoutBestellpostenInput
  }

  export type BestellpostenUncheckedCreateWithoutBestellungInput = {
    id?: number
    productId: number
    quantity: number
    einzelpreis: Decimal | DecimalJsLike | number | string
  }

  export type BestellpostenCreateOrConnectWithoutBestellungInput = {
    where: BestellpostenWhereUniqueInput
    create: XOR<BestellpostenCreateWithoutBestellungInput, BestellpostenUncheckedCreateWithoutBestellungInput>
  }

  export type BestellpostenCreateManyBestellungInputEnvelope = {
    data: BestellpostenCreateManyBestellungInput | BestellpostenCreateManyBestellungInput[]
    skipDuplicates?: boolean
  }

  export type BestellpostenUpsertWithWhereUniqueWithoutBestellungInput = {
    where: BestellpostenWhereUniqueInput
    update: XOR<BestellpostenUpdateWithoutBestellungInput, BestellpostenUncheckedUpdateWithoutBestellungInput>
    create: XOR<BestellpostenCreateWithoutBestellungInput, BestellpostenUncheckedCreateWithoutBestellungInput>
  }

  export type BestellpostenUpdateWithWhereUniqueWithoutBestellungInput = {
    where: BestellpostenWhereUniqueInput
    data: XOR<BestellpostenUpdateWithoutBestellungInput, BestellpostenUncheckedUpdateWithoutBestellungInput>
  }

  export type BestellpostenUpdateManyWithWhereWithoutBestellungInput = {
    where: BestellpostenScalarWhereInput
    data: XOR<BestellpostenUpdateManyMutationInput, BestellpostenUncheckedUpdateManyWithoutBestellungInput>
  }

  export type BestellungCreateWithoutPostensInput = {
    createdAt?: Date | string
    sessionid: string
    gesamtpreis: Decimal | DecimalJsLike | number | string
  }

  export type BestellungUncheckedCreateWithoutPostensInput = {
    id?: number
    createdAt?: Date | string
    sessionid: string
    gesamtpreis: Decimal | DecimalJsLike | number | string
  }

  export type BestellungCreateOrConnectWithoutPostensInput = {
    where: BestellungWhereUniqueInput
    create: XOR<BestellungCreateWithoutPostensInput, BestellungUncheckedCreateWithoutPostensInput>
  }

  export type ProdukteCreateWithoutBestellpostenInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    imgsrc: string
    Warenkorb?: WarenkorbCreateNestedManyWithoutProductInput
  }

  export type ProdukteUncheckedCreateWithoutBestellpostenInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    imgsrc: string
    Warenkorb?: WarenkorbUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProdukteCreateOrConnectWithoutBestellpostenInput = {
    where: ProdukteWhereUniqueInput
    create: XOR<ProdukteCreateWithoutBestellpostenInput, ProdukteUncheckedCreateWithoutBestellpostenInput>
  }

  export type BestellungUpsertWithoutPostensInput = {
    update: XOR<BestellungUpdateWithoutPostensInput, BestellungUncheckedUpdateWithoutPostensInput>
    create: XOR<BestellungCreateWithoutPostensInput, BestellungUncheckedCreateWithoutPostensInput>
    where?: BestellungWhereInput
  }

  export type BestellungUpdateToOneWithWhereWithoutPostensInput = {
    where?: BestellungWhereInput
    data: XOR<BestellungUpdateWithoutPostensInput, BestellungUncheckedUpdateWithoutPostensInput>
  }

  export type BestellungUpdateWithoutPostensInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionid?: StringFieldUpdateOperationsInput | string
    gesamtpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BestellungUncheckedUpdateWithoutPostensInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionid?: StringFieldUpdateOperationsInput | string
    gesamtpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProdukteUpsertWithoutBestellpostenInput = {
    update: XOR<ProdukteUpdateWithoutBestellpostenInput, ProdukteUncheckedUpdateWithoutBestellpostenInput>
    create: XOR<ProdukteCreateWithoutBestellpostenInput, ProdukteUncheckedCreateWithoutBestellpostenInput>
    where?: ProdukteWhereInput
  }

  export type ProdukteUpdateToOneWithWhereWithoutBestellpostenInput = {
    where?: ProdukteWhereInput
    data: XOR<ProdukteUpdateWithoutBestellpostenInput, ProdukteUncheckedUpdateWithoutBestellpostenInput>
  }

  export type ProdukteUpdateWithoutBestellpostenInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imgsrc?: StringFieldUpdateOperationsInput | string
    Warenkorb?: WarenkorbUpdateManyWithoutProductNestedInput
  }

  export type ProdukteUncheckedUpdateWithoutBestellpostenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imgsrc?: StringFieldUpdateOperationsInput | string
    Warenkorb?: WarenkorbUncheckedUpdateManyWithoutProductNestedInput
  }

  export type WarenkorbCreateManyProductInput = {
    id?: number
    sessionid: string
    quantity: number
  }

  export type BestellpostenCreateManyProductInput = {
    id?: number
    bestellungId: number
    quantity: number
    einzelpreis: Decimal | DecimalJsLike | number | string
  }

  export type WarenkorbUpdateWithoutProductInput = {
    sessionid?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type WarenkorbUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionid?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type WarenkorbUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionid?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type BestellpostenUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    einzelpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bestellung?: BestellungUpdateOneRequiredWithoutPostensNestedInput
  }

  export type BestellpostenUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    bestellungId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    einzelpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BestellpostenUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    bestellungId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    einzelpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BestellpostenCreateManyBestellungInput = {
    id?: number
    productId: number
    quantity: number
    einzelpreis: Decimal | DecimalJsLike | number | string
  }

  export type BestellpostenUpdateWithoutBestellungInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    einzelpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProdukteUpdateOneRequiredWithoutBestellpostenNestedInput
  }

  export type BestellpostenUncheckedUpdateWithoutBestellungInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    einzelpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BestellpostenUncheckedUpdateManyWithoutBestellungInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    einzelpreis?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



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