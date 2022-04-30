/**
 * @packageDocumentation
 * @module api.functional.sellers.sales.entire
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher, Primitive } from "nestia-fetcher";
import type { IConnection } from "nestia-fetcher";

import type { IPage } from "./../../../../../../../nestia.config.ts/src/api/structures/common/IPage";
import type { ISaleEntireArtcle } from "./../../../../structures/sales/articles/ISaleEntireArticle";

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller SellerSaleEntireArticlesController.index()
 * @path GET /sellers/:section/sales/:saleId/entire
 */
export function index
    (
        connection: IConnection,
        section: string,
        saleId: number,
        input: Primitive<index.Query>
    ): Promise<index.Output>
{
    return Fetcher.fetch
    (
        connection,
        index.ENCRYPTED,
        index.METHOD,
        index.path(section, saleId, input)
    );
}
export namespace index
{
    export type Query = Primitive<IPage.IRequest<string>>;
    export type Output = Primitive<IPage<ISaleEntireArtcle.ISummary>>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/sellers/:section/sales/:saleId/entire";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: true,
    };

    export function path(section: [object Object], saleId: [object Object], input: [object Object]): string
    {
        return `/sellers/${section}/sales/${saleId}/entire?${new URLSearchParams(input as any).toString()}`;
    }
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller SellerSaleEntireArticlesController.at()
 * @path GET /sellers/:section/sales/:saleId/entire/:id
 */
export function at
    (
        connection: IConnection,
        section: string,
        saleId: number,
        id: number
    ): Promise<at.Output>
{
    return Fetcher.fetch
    (
        connection,
        at.ENCRYPTED,
        at.METHOD,
        at.path(section, saleId, id)
    );
}
export namespace at
{
    export type Output = Primitive<ISaleEntireArtcle>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/sellers/:section/sales/:saleId/entire/:id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: true,
    };

    export function path(section: [object Object], saleId: [object Object], id: [object Object]): string
    {
        return `/sellers/${section}/sales/${saleId}/entire/${id}`;
    }
}