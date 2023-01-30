/* tslint:disable */
/* eslint-disable */
/**
 * Notion Database Forms
 * OAuth Login
 *
 * The version of the OpenAPI document: 1.0
 * Contact: mattia@mattiamueggler.ch
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface ModelsHttpError
 */
export interface ModelsHttpError {
    /**
     * 
     * @type {string}
     * @memberof ModelsHttpError
     */
    'error'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsHttpError
     */
    'message'?: string;
}
/**
 * 
 * @export
 * @interface ModelsOption
 */
export interface ModelsOption {
    /**
     * 
     * @type {string}
     * @memberof ModelsOption
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsOption
     */
    'name'?: string;
}
/**
 * 
 * @export
 * @interface ModelsSelect
 */
export interface ModelsSelect {
    /**
     * 
     * @type {string}
     * @memberof ModelsSelect
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsSelect
     */
    'name'?: string;
    /**
     * 
     * @type {Array<ModelsOption>}
     * @memberof ModelsSelect
     */
    'options'?: Array<ModelsOption>;
}
/**
 * 
 * @export
 * @interface ModelsSiteResponse
 */
export interface ModelsSiteResponse {
    /**
     * 
     * @type {string}
     * @memberof ModelsSiteResponse
     */
    'author'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsSiteResponse
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsSiteResponse
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsSiteResponse
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsSiteResponse
     */
    'type'?: string;
}
/**
 * 
 * @export
 * @interface NotionapiAnnotations
 */
export interface NotionapiAnnotations {
    /**
     * 
     * @type {boolean}
     * @memberof NotionapiAnnotations
     */
    'bold'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NotionapiAnnotations
     */
    'code'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NotionapiAnnotations
     */
    'color'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof NotionapiAnnotations
     */
    'italic'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NotionapiAnnotations
     */
    'strikethrough'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NotionapiAnnotations
     */
    'underline'?: boolean;
}
/**
 * 
 * @export
 * @interface NotionapiDatabaseMention
 */
export interface NotionapiDatabaseMention {
    /**
     * 
     * @type {string}
     * @memberof NotionapiDatabaseMention
     */
    'id'?: string;
}
/**
 * 
 * @export
 * @interface NotionapiDateObject
 */
export interface NotionapiDateObject {
    /**
     * 
     * @type {string}
     * @memberof NotionapiDateObject
     */
    'end'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotionapiDateObject
     */
    'start'?: string;
}
/**
 * 
 * @export
 * @interface NotionapiEquation
 */
export interface NotionapiEquation {
    /**
     * 
     * @type {string}
     * @memberof NotionapiEquation
     */
    'expression'?: string;
}
/**
 * 
 * @export
 * @interface NotionapiFileObject
 */
export interface NotionapiFileObject {
    /**
     * 
     * @type {string}
     * @memberof NotionapiFileObject
     */
    'expiry_time'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotionapiFileObject
     */
    'url'?: string;
}
/**
 * 
 * @export
 * @interface NotionapiIcon
 */
export interface NotionapiIcon {
    /**
     * 
     * @type {string}
     * @memberof NotionapiIcon
     */
    'emoji'?: string;
    /**
     * 
     * @type {NotionapiFileObject}
     * @memberof NotionapiIcon
     */
    'external'?: NotionapiFileObject;
    /**
     * 
     * @type {NotionapiFileObject}
     * @memberof NotionapiIcon
     */
    'file'?: NotionapiFileObject;
    /**
     * 
     * @type {string}
     * @memberof NotionapiIcon
     */
    'type'?: string;
}
/**
 * 
 * @export
 * @interface NotionapiImage
 */
export interface NotionapiImage {
    /**
     * 
     * @type {Array<NotionapiRichText>}
     * @memberof NotionapiImage
     */
    'caption'?: Array<NotionapiRichText>;
    /**
     * 
     * @type {NotionapiFileObject}
     * @memberof NotionapiImage
     */
    'external'?: NotionapiFileObject;
    /**
     * 
     * @type {NotionapiFileObject}
     * @memberof NotionapiImage
     */
    'file'?: NotionapiFileObject;
    /**
     * 
     * @type {string}
     * @memberof NotionapiImage
     */
    'type'?: string;
}
/**
 * 
 * @export
 * @interface NotionapiLink
 */
export interface NotionapiLink {
    /**
     * 
     * @type {string}
     * @memberof NotionapiLink
     */
    'url'?: string;
}
/**
 * 
 * @export
 * @interface NotionapiMention
 */
export interface NotionapiMention {
    /**
     * 
     * @type {NotionapiDatabaseMention}
     * @memberof NotionapiMention
     */
    'database'?: NotionapiDatabaseMention;
    /**
     * 
     * @type {NotionapiDateObject}
     * @memberof NotionapiMention
     */
    'date'?: NotionapiDateObject;
    /**
     * 
     * @type {NotionapiPageMention}
     * @memberof NotionapiMention
     */
    'page'?: NotionapiPageMention;
    /**
     * 
     * @type {NotionapiTemplateMention}
     * @memberof NotionapiMention
     */
    'template_mention'?: NotionapiTemplateMention;
    /**
     * 
     * @type {string}
     * @memberof NotionapiMention
     */
    'type'?: string;
    /**
     * 
     * @type {NotionapiUser}
     * @memberof NotionapiMention
     */
    'user'?: NotionapiUser;
}
/**
 * 
 * @export
 * @interface NotionapiPage
 */
export interface NotionapiPage {
    /**
     * 
     * @type {boolean}
     * @memberof NotionapiPage
     */
    'archived'?: boolean;
    /**
     * 
     * @type {NotionapiImage}
     * @memberof NotionapiPage
     */
    'cover'?: NotionapiImage;
    /**
     * 
     * @type {NotionapiUser}
     * @memberof NotionapiPage
     */
    'created_by'?: NotionapiUser;
    /**
     * 
     * @type {string}
     * @memberof NotionapiPage
     */
    'created_time'?: string;
    /**
     * 
     * @type {NotionapiIcon}
     * @memberof NotionapiPage
     */
    'icon'?: NotionapiIcon;
    /**
     * 
     * @type {string}
     * @memberof NotionapiPage
     */
    'id'?: string;
    /**
     * 
     * @type {NotionapiUser}
     * @memberof NotionapiPage
     */
    'last_edited_by'?: NotionapiUser;
    /**
     * 
     * @type {string}
     * @memberof NotionapiPage
     */
    'last_edited_time'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotionapiPage
     */
    'object'?: string;
    /**
     * 
     * @type {NotionapiParent}
     * @memberof NotionapiPage
     */
    'parent'?: NotionapiParent;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof NotionapiPage
     */
    'properties'?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof NotionapiPage
     */
    'url'?: string;
}
/**
 * 
 * @export
 * @interface NotionapiPageMention
 */
export interface NotionapiPageMention {
    /**
     * 
     * @type {string}
     * @memberof NotionapiPageMention
     */
    'id'?: string;
}
/**
 * 
 * @export
 * @interface NotionapiParent
 */
export interface NotionapiParent {
    /**
     * 
     * @type {string}
     * @memberof NotionapiParent
     */
    'block_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotionapiParent
     */
    'database_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotionapiParent
     */
    'page_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotionapiParent
     */
    'type'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof NotionapiParent
     */
    'workspace'?: boolean;
}
/**
 * 
 * @export
 * @interface NotionapiPerson
 */
export interface NotionapiPerson {
    /**
     * 
     * @type {string}
     * @memberof NotionapiPerson
     */
    'email'?: string;
}
/**
 * 
 * @export
 * @interface NotionapiRichText
 */
export interface NotionapiRichText {
    /**
     * 
     * @type {NotionapiAnnotations}
     * @memberof NotionapiRichText
     */
    'annotations'?: NotionapiAnnotations;
    /**
     * 
     * @type {NotionapiEquation}
     * @memberof NotionapiRichText
     */
    'equation'?: NotionapiEquation;
    /**
     * 
     * @type {string}
     * @memberof NotionapiRichText
     */
    'href'?: string;
    /**
     * 
     * @type {NotionapiMention}
     * @memberof NotionapiRichText
     */
    'mention'?: NotionapiMention;
    /**
     * 
     * @type {string}
     * @memberof NotionapiRichText
     */
    'plain_text'?: string;
    /**
     * 
     * @type {NotionapiText}
     * @memberof NotionapiRichText
     */
    'text'?: NotionapiText;
    /**
     * 
     * @type {string}
     * @memberof NotionapiRichText
     */
    'type'?: string;
}
/**
 * 
 * @export
 * @interface NotionapiTemplateMention
 */
export interface NotionapiTemplateMention {
    /**
     * 
     * @type {string}
     * @memberof NotionapiTemplateMention
     */
    'template_mention_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotionapiTemplateMention
     */
    'template_mention_user'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotionapiTemplateMention
     */
    'type'?: string;
}
/**
 * 
 * @export
 * @interface NotionapiText
 */
export interface NotionapiText {
    /**
     * 
     * @type {string}
     * @memberof NotionapiText
     */
    'content'?: string;
    /**
     * 
     * @type {NotionapiLink}
     * @memberof NotionapiText
     */
    'link'?: NotionapiLink;
}
/**
 * 
 * @export
 * @interface NotionapiUser
 */
export interface NotionapiUser {
    /**
     * 
     * @type {string}
     * @memberof NotionapiUser
     */
    'avatar_url'?: string;
    /**
     * 
     * @type {object}
     * @memberof NotionapiUser
     */
    'bot'?: object;
    /**
     * 
     * @type {string}
     * @memberof NotionapiUser
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotionapiUser
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotionapiUser
     */
    'object'?: string;
    /**
     * 
     * @type {NotionapiPerson}
     * @memberof NotionapiUser
     */
    'person'?: NotionapiPerson;
    /**
     * 
     * @type {string}
     * @memberof NotionapiUser
     */
    'type'?: string;
}

/**
 * PagesApi - axios parameter creator
 * @export
 */
export const PagesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} databaseId databaseId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1PagesDatabaseIdOptionsGet: async (databaseId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'databaseId' is not null or undefined
            assertParamExists('apiV1PagesDatabaseIdOptionsGet', 'databaseId', databaseId)
            const localVarPath = `/api/v1/pages/{databaseId}/options`
                .replace(`{${"databaseId"}}`, encodeURIComponent(String(databaseId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all select options
         * @param {string} databaseId databaseId
         * @param {string} select select
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1PagesDatabaseIdOptionsSelectGet: async (databaseId: string, select: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'databaseId' is not null or undefined
            assertParamExists('apiV1PagesDatabaseIdOptionsSelectGet', 'databaseId', databaseId)
            // verify required parameter 'select' is not null or undefined
            assertParamExists('apiV1PagesDatabaseIdOptionsSelectGet', 'select', select)
            const localVarPath = `/api/v1/pages/{databaseId}/options/{select}`
                .replace(`{${"databaseId"}}`, encodeURIComponent(String(databaseId)))
                .replace(`{${"select"}}`, encodeURIComponent(String(select)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new database record
         * @param {string} databaseId databaseId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1PagesDatabaseIdPost: async (databaseId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'databaseId' is not null or undefined
            assertParamExists('apiV1PagesDatabaseIdPost', 'databaseId', databaseId)
            const localVarPath = `/api/v1/pages/{databaseId}`
                .replace(`{${"databaseId"}}`, encodeURIComponent(String(databaseId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all pages and databases
         * @param {string} showpages showpages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1PagesGet: async (showpages: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'showpages' is not null or undefined
            assertParamExists('apiV1PagesGet', 'showpages', showpages)
            const localVarPath = `/api/v1/pages`
                .replace(`{${"showpages"}}`, encodeURIComponent(String(showpages)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List a specific page or database
         * @param {string} type type
         * @param {string} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1PagesTypeIdPost: async (type: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'type' is not null or undefined
            assertParamExists('apiV1PagesTypeIdPost', 'type', type)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiV1PagesTypeIdPost', 'id', id)
            const localVarPath = `/api/v1/pages/{type}/{id}`
                .replace(`{${"type"}}`, encodeURIComponent(String(type)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PagesApi - functional programming interface
 * @export
 */
export const PagesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PagesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} databaseId databaseId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1PagesDatabaseIdOptionsGet(databaseId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSelect>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1PagesDatabaseIdOptionsGet(databaseId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all select options
         * @param {string} databaseId databaseId
         * @param {string} select select
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1PagesDatabaseIdOptionsSelectGet(databaseId: string, select: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSelect>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1PagesDatabaseIdOptionsSelectGet(databaseId, select, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new database record
         * @param {string} databaseId databaseId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1PagesDatabaseIdPost(databaseId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotionapiPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1PagesDatabaseIdPost(databaseId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all pages and databases
         * @param {string} showpages showpages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1PagesGet(showpages: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelsSiteResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1PagesGet(showpages, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List a specific page or database
         * @param {string} type type
         * @param {string} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1PagesTypeIdPost(type: string, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NotionapiPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1PagesTypeIdPost(type, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PagesApi - factory interface
 * @export
 */
export const PagesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PagesApiFp(configuration)
    return {
        /**
         * 
         * @param {string} databaseId databaseId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1PagesDatabaseIdOptionsGet(databaseId: string, options?: any): AxiosPromise<Array<ModelsSelect>> {
            return localVarFp.apiV1PagesDatabaseIdOptionsGet(databaseId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all select options
         * @param {string} databaseId databaseId
         * @param {string} select select
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1PagesDatabaseIdOptionsSelectGet(databaseId: string, select: string, options?: any): AxiosPromise<Array<ModelsSelect>> {
            return localVarFp.apiV1PagesDatabaseIdOptionsSelectGet(databaseId, select, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new database record
         * @param {string} databaseId databaseId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1PagesDatabaseIdPost(databaseId: string, options?: any): AxiosPromise<NotionapiPage> {
            return localVarFp.apiV1PagesDatabaseIdPost(databaseId, options).then((request) => request(axios, basePath));
        },
        /**
         * List all pages and databases
         * @param {string} showpages showpages
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1PagesGet(showpages: string, options?: any): AxiosPromise<Array<ModelsSiteResponse>> {
            return localVarFp.apiV1PagesGet(showpages, options).then((request) => request(axios, basePath));
        },
        /**
         * List a specific page or database
         * @param {string} type type
         * @param {string} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1PagesTypeIdPost(type: string, id: string, options?: any): AxiosPromise<NotionapiPage> {
            return localVarFp.apiV1PagesTypeIdPost(type, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PagesApi - object-oriented interface
 * @export
 * @class PagesApi
 * @extends {BaseAPI}
 */
export class PagesApi extends BaseAPI {
    /**
     * 
     * @param {string} databaseId databaseId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApi
     */
    public apiV1PagesDatabaseIdOptionsGet(databaseId: string, options?: AxiosRequestConfig) {
        return PagesApiFp(this.configuration).apiV1PagesDatabaseIdOptionsGet(databaseId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all select options
     * @param {string} databaseId databaseId
     * @param {string} select select
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApi
     */
    public apiV1PagesDatabaseIdOptionsSelectGet(databaseId: string, select: string, options?: AxiosRequestConfig) {
        return PagesApiFp(this.configuration).apiV1PagesDatabaseIdOptionsSelectGet(databaseId, select, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new database record
     * @param {string} databaseId databaseId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApi
     */
    public apiV1PagesDatabaseIdPost(databaseId: string, options?: AxiosRequestConfig) {
        return PagesApiFp(this.configuration).apiV1PagesDatabaseIdPost(databaseId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all pages and databases
     * @param {string} showpages showpages
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApi
     */
    public apiV1PagesGet(showpages: string, options?: AxiosRequestConfig) {
        return PagesApiFp(this.configuration).apiV1PagesGet(showpages, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List a specific page or database
     * @param {string} type type
     * @param {string} id id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApi
     */
    public apiV1PagesTypeIdPost(type: string, id: string, options?: AxiosRequestConfig) {
        return PagesApiFp(this.configuration).apiV1PagesTypeIdPost(type, id, options).then((request) => request(this.axios, this.basePath));
    }
}


