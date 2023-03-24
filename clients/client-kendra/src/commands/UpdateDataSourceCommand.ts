// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { UpdateDataSourceRequest } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDataSourceCommand,
  serializeAws_json1_1UpdateDataSourceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateDataSourceCommand}.
 */
export interface UpdateDataSourceCommandInput extends UpdateDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataSourceCommand}.
 */
export interface UpdateDataSourceCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing Amazon Kendra data source connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateDataSourceCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateDataSourceCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = {
 *   Id: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   IndexId: "STRING_VALUE", // required
 *   Configuration: {
 *     S3Configuration: {
 *       BucketName: "STRING_VALUE", // required
 *       InclusionPrefixes: [
 *         "STRING_VALUE",
 *       ],
 *       InclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ExclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       DocumentsMetadataConfiguration: {
 *         S3Prefix: "STRING_VALUE",
 *       },
 *       AccessControlListConfiguration: {
 *         KeyPath: "STRING_VALUE",
 *       },
 *     },
 *     SharePointConfiguration: {
 *       SharePointVersion: "SHAREPOINT_2013" || "SHAREPOINT_2016" || "SHAREPOINT_ONLINE" || "SHAREPOINT_2019", // required
 *       Urls: [ // required
 *         "STRING_VALUE",
 *       ],
 *       SecretArn: "STRING_VALUE", // required
 *       CrawlAttachments: true || false,
 *       UseChangeLog: true || false,
 *       InclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ExclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       VpcConfiguration: {
 *         SubnetIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       FieldMappings: [
 *         {
 *           DataSourceFieldName: "STRING_VALUE", // required
 *           DateFieldFormat: "STRING_VALUE",
 *           IndexFieldName: "STRING_VALUE", // required
 *         },
 *       ],
 *       DocumentTitleFieldName: "STRING_VALUE",
 *       DisableLocalGroups: true || false,
 *       SslCertificateS3Path: {
 *         Bucket: "STRING_VALUE", // required
 *         Key: "STRING_VALUE", // required
 *       },
 *       AuthenticationType: "HTTP_BASIC" || "OAUTH2",
 *       ProxyConfiguration: {
 *         Host: "STRING_VALUE", // required
 *         Port: Number("int"), // required
 *         Credentials: "STRING_VALUE",
 *       },
 *     },
 *     DatabaseConfiguration: {
 *       DatabaseEngineType: "RDS_AURORA_MYSQL" || "RDS_AURORA_POSTGRESQL" || "RDS_MYSQL" || "RDS_POSTGRESQL", // required
 *       ConnectionConfiguration: {
 *         DatabaseHost: "STRING_VALUE", // required
 *         DatabasePort: Number("int"), // required
 *         DatabaseName: "STRING_VALUE", // required
 *         TableName: "STRING_VALUE", // required
 *         SecretArn: "STRING_VALUE", // required
 *       },
 *       VpcConfiguration: {
 *         SubnetIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ColumnConfiguration: {
 *         DocumentIdColumnName: "STRING_VALUE", // required
 *         DocumentDataColumnName: "STRING_VALUE", // required
 *         DocumentTitleColumnName: "STRING_VALUE",
 *         FieldMappings: [
 *           {
 *             DataSourceFieldName: "STRING_VALUE", // required
 *             DateFieldFormat: "STRING_VALUE",
 *             IndexFieldName: "STRING_VALUE", // required
 *           },
 *         ],
 *         ChangeDetectingColumns: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       AclConfiguration: {
 *         AllowedGroupsColumnName: "STRING_VALUE", // required
 *       },
 *       SqlConfiguration: {
 *         QueryIdentifiersEnclosingOption: "DOUBLE_QUOTES" || "NONE",
 *       },
 *     },
 *     SalesforceConfiguration: {
 *       ServerUrl: "STRING_VALUE", // required
 *       SecretArn: "STRING_VALUE", // required
 *       StandardObjectConfigurations: [
 *         {
 *           Name: "ACCOUNT" || "CAMPAIGN" || "CASE" || "CONTACT" || "CONTRACT" || "DOCUMENT" || "GROUP" || "IDEA" || "LEAD" || "OPPORTUNITY" || "PARTNER" || "PRICEBOOK" || "PRODUCT" || "PROFILE" || "SOLUTION" || "TASK" || "USER", // required
 *           DocumentDataFieldName: "STRING_VALUE", // required
 *           DocumentTitleFieldName: "STRING_VALUE",
 *           FieldMappings: [
 *             "<DataSourceToIndexFieldMappingList>",
 *           ],
 *         },
 *       ],
 *       KnowledgeArticleConfiguration: {
 *         IncludedStates: [ // required
 *           "DRAFT" || "PUBLISHED" || "ARCHIVED",
 *         ],
 *         StandardKnowledgeArticleTypeConfiguration: {
 *           DocumentDataFieldName: "STRING_VALUE", // required
 *           DocumentTitleFieldName: "STRING_VALUE",
 *           FieldMappings: [
 *             "<DataSourceToIndexFieldMappingList>",
 *           ],
 *         },
 *         CustomKnowledgeArticleTypeConfigurations: [
 *           {
 *             Name: "STRING_VALUE", // required
 *             DocumentDataFieldName: "STRING_VALUE", // required
 *             DocumentTitleFieldName: "STRING_VALUE",
 *             FieldMappings: [
 *               "<DataSourceToIndexFieldMappingList>",
 *             ],
 *           },
 *         ],
 *       },
 *       ChatterFeedConfiguration: {
 *         DocumentDataFieldName: "STRING_VALUE", // required
 *         DocumentTitleFieldName: "STRING_VALUE",
 *         FieldMappings: [
 *           "<DataSourceToIndexFieldMappingList>",
 *         ],
 *         IncludeFilterTypes: [
 *           "ACTIVE_USER" || "STANDARD_USER",
 *         ],
 *       },
 *       CrawlAttachments: true || false,
 *       StandardObjectAttachmentConfiguration: {
 *         DocumentTitleFieldName: "STRING_VALUE",
 *         FieldMappings: [
 *           "<DataSourceToIndexFieldMappingList>",
 *         ],
 *       },
 *       IncludeAttachmentFilePatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ExcludeAttachmentFilePatterns: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     OneDriveConfiguration: {
 *       TenantDomain: "STRING_VALUE", // required
 *       SecretArn: "STRING_VALUE", // required
 *       OneDriveUsers: {
 *         OneDriveUserList: [
 *           "STRING_VALUE",
 *         ],
 *         OneDriveUserS3Path: {
 *           Bucket: "STRING_VALUE", // required
 *           Key: "STRING_VALUE", // required
 *         },
 *       },
 *       InclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ExclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       FieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       DisableLocalGroups: true || false,
 *     },
 *     ServiceNowConfiguration: {
 *       HostUrl: "STRING_VALUE", // required
 *       SecretArn: "STRING_VALUE", // required
 *       ServiceNowBuildVersion: "LONDON" || "OTHERS", // required
 *       KnowledgeArticleConfiguration: {
 *         CrawlAttachments: true || false,
 *         IncludeAttachmentFilePatterns: [
 *           "STRING_VALUE",
 *         ],
 *         ExcludeAttachmentFilePatterns: [
 *           "STRING_VALUE",
 *         ],
 *         DocumentDataFieldName: "STRING_VALUE", // required
 *         DocumentTitleFieldName: "STRING_VALUE",
 *         FieldMappings: [
 *           "<DataSourceToIndexFieldMappingList>",
 *         ],
 *         FilterQuery: "STRING_VALUE",
 *       },
 *       ServiceCatalogConfiguration: {
 *         CrawlAttachments: true || false,
 *         IncludeAttachmentFilePatterns: [
 *           "STRING_VALUE",
 *         ],
 *         ExcludeAttachmentFilePatterns: [
 *           "STRING_VALUE",
 *         ],
 *         DocumentDataFieldName: "STRING_VALUE", // required
 *         DocumentTitleFieldName: "STRING_VALUE",
 *         FieldMappings: [
 *           "<DataSourceToIndexFieldMappingList>",
 *         ],
 *       },
 *       AuthenticationType: "HTTP_BASIC" || "OAUTH2",
 *     },
 *     ConfluenceConfiguration: {
 *       ServerUrl: "STRING_VALUE", // required
 *       SecretArn: "STRING_VALUE", // required
 *       Version: "CLOUD" || "SERVER", // required
 *       SpaceConfiguration: {
 *         CrawlPersonalSpaces: true || false,
 *         CrawlArchivedSpaces: true || false,
 *         IncludeSpaces: [
 *           "STRING_VALUE",
 *         ],
 *         ExcludeSpaces: [
 *           "STRING_VALUE",
 *         ],
 *         SpaceFieldMappings: [
 *           {
 *             DataSourceFieldName: "DISPLAY_URL" || "ITEM_TYPE" || "SPACE_KEY" || "URL",
 *             DateFieldFormat: "STRING_VALUE",
 *             IndexFieldName: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       PageConfiguration: {
 *         PageFieldMappings: [
 *           {
 *             DataSourceFieldName: "AUTHOR" || "CONTENT_STATUS" || "CREATED_DATE" || "DISPLAY_URL" || "ITEM_TYPE" || "LABELS" || "MODIFIED_DATE" || "PARENT_ID" || "SPACE_KEY" || "SPACE_NAME" || "URL" || "VERSION",
 *             DateFieldFormat: "STRING_VALUE",
 *             IndexFieldName: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       BlogConfiguration: {
 *         BlogFieldMappings: [
 *           {
 *             DataSourceFieldName: "AUTHOR" || "DISPLAY_URL" || "ITEM_TYPE" || "LABELS" || "PUBLISH_DATE" || "SPACE_KEY" || "SPACE_NAME" || "URL" || "VERSION",
 *             DateFieldFormat: "STRING_VALUE",
 *             IndexFieldName: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       AttachmentConfiguration: {
 *         CrawlAttachments: true || false,
 *         AttachmentFieldMappings: [
 *           {
 *             DataSourceFieldName: "AUTHOR" || "CONTENT_TYPE" || "CREATED_DATE" || "DISPLAY_URL" || "FILE_SIZE" || "ITEM_TYPE" || "PARENT_ID" || "SPACE_KEY" || "SPACE_NAME" || "URL" || "VERSION",
 *             DateFieldFormat: "STRING_VALUE",
 *             IndexFieldName: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       VpcConfiguration: {
 *         SubnetIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       InclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ExclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ProxyConfiguration: {
 *         Host: "STRING_VALUE", // required
 *         Port: Number("int"), // required
 *         Credentials: "STRING_VALUE",
 *       },
 *       AuthenticationType: "HTTP_BASIC" || "PAT",
 *     },
 *     GoogleDriveConfiguration: {
 *       SecretArn: "STRING_VALUE", // required
 *       InclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ExclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       FieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       ExcludeMimeTypes: [
 *         "STRING_VALUE",
 *       ],
 *       ExcludeUserAccounts: [
 *         "STRING_VALUE",
 *       ],
 *       ExcludeSharedDrives: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     WebCrawlerConfiguration: {
 *       Urls: {
 *         SeedUrlConfiguration: {
 *           SeedUrls: [ // required
 *             "STRING_VALUE",
 *           ],
 *           WebCrawlerMode: "HOST_ONLY" || "SUBDOMAINS" || "EVERYTHING",
 *         },
 *         SiteMapsConfiguration: {
 *           SiteMaps: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       CrawlDepth: Number("int"),
 *       MaxLinksPerPage: Number("int"),
 *       MaxContentSizePerPageInMegaBytes: Number("float"),
 *       MaxUrlsPerMinuteCrawlRate: Number("int"),
 *       UrlInclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       UrlExclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ProxyConfiguration: {
 *         Host: "STRING_VALUE", // required
 *         Port: Number("int"), // required
 *         Credentials: "STRING_VALUE",
 *       },
 *       AuthenticationConfiguration: {
 *         BasicAuthentication: [
 *           {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Credentials: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *     WorkDocsConfiguration: {
 *       OrganizationId: "STRING_VALUE", // required
 *       CrawlComments: true || false,
 *       UseChangeLog: true || false,
 *       InclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ExclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       FieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *     },
 *     FsxConfiguration: {
 *       FileSystemId: "STRING_VALUE", // required
 *       FileSystemType: "WINDOWS", // required
 *       VpcConfiguration: {
 *         SubnetIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       SecretArn: "STRING_VALUE",
 *       InclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ExclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       FieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *     },
 *     SlackConfiguration: {
 *       TeamId: "STRING_VALUE", // required
 *       SecretArn: "STRING_VALUE", // required
 *       VpcConfiguration: {
 *         SubnetIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       SlackEntityList: [ // required
 *         "PUBLIC_CHANNEL" || "PRIVATE_CHANNEL" || "GROUP_MESSAGE" || "DIRECT_MESSAGE",
 *       ],
 *       UseChangeLog: true || false,
 *       CrawlBotMessage: true || false,
 *       ExcludeArchived: true || false,
 *       SinceCrawlDate: "STRING_VALUE", // required
 *       LookBackPeriod: Number("int"),
 *       PrivateChannelFilter: [
 *         "STRING_VALUE",
 *       ],
 *       PublicChannelFilter: [
 *         "STRING_VALUE",
 *       ],
 *       InclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ExclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       FieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *     },
 *     BoxConfiguration: {
 *       EnterpriseId: "STRING_VALUE", // required
 *       SecretArn: "STRING_VALUE", // required
 *       UseChangeLog: true || false,
 *       CrawlComments: true || false,
 *       CrawlTasks: true || false,
 *       CrawlWebLinks: true || false,
 *       FileFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       TaskFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       CommentFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       WebLinkFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       InclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ExclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       VpcConfiguration: {
 *         SubnetIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     QuipConfiguration: {
 *       Domain: "STRING_VALUE", // required
 *       SecretArn: "STRING_VALUE", // required
 *       CrawlFileComments: true || false,
 *       CrawlChatRooms: true || false,
 *       CrawlAttachments: true || false,
 *       FolderIds: [
 *         "STRING_VALUE",
 *       ],
 *       ThreadFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       MessageFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       AttachmentFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       InclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ExclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       VpcConfiguration: {
 *         SubnetIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     JiraConfiguration: {
 *       JiraAccountUrl: "STRING_VALUE", // required
 *       SecretArn: "STRING_VALUE", // required
 *       UseChangeLog: true || false,
 *       Project: [
 *         "STRING_VALUE",
 *       ],
 *       IssueType: [
 *         "STRING_VALUE",
 *       ],
 *       Status: [
 *         "STRING_VALUE",
 *       ],
 *       IssueSubEntityFilter: [
 *         "COMMENTS" || "ATTACHMENTS" || "WORKLOGS",
 *       ],
 *       AttachmentFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       CommentFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       IssueFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       ProjectFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       WorkLogFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       InclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ExclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       VpcConfiguration: {
 *         SubnetIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     GitHubConfiguration: {
 *       SaaSConfiguration: {
 *         OrganizationName: "STRING_VALUE", // required
 *         HostUrl: "STRING_VALUE", // required
 *       },
 *       OnPremiseConfiguration: {
 *         HostUrl: "STRING_VALUE", // required
 *         OrganizationName: "STRING_VALUE", // required
 *         SslCertificateS3Path: {
 *           Bucket: "STRING_VALUE", // required
 *           Key: "STRING_VALUE", // required
 *         },
 *       },
 *       Type: "SAAS" || "ON_PREMISE",
 *       SecretArn: "STRING_VALUE", // required
 *       UseChangeLog: true || false,
 *       GitHubDocumentCrawlProperties: {
 *         CrawlRepositoryDocuments: true || false,
 *         CrawlIssue: true || false,
 *         CrawlIssueComment: true || false,
 *         CrawlIssueCommentAttachment: true || false,
 *         CrawlPullRequest: true || false,
 *         CrawlPullRequestComment: true || false,
 *         CrawlPullRequestCommentAttachment: true || false,
 *       },
 *       RepositoryFilter: [
 *         "STRING_VALUE",
 *       ],
 *       InclusionFolderNamePatterns: [
 *         "STRING_VALUE",
 *       ],
 *       InclusionFileTypePatterns: [
 *         "STRING_VALUE",
 *       ],
 *       InclusionFileNamePatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ExclusionFolderNamePatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ExclusionFileTypePatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ExclusionFileNamePatterns: [
 *         "STRING_VALUE",
 *       ],
 *       VpcConfiguration: {
 *         SubnetIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       GitHubRepositoryConfigurationFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       GitHubCommitConfigurationFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       GitHubIssueDocumentConfigurationFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       GitHubIssueCommentConfigurationFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       GitHubIssueAttachmentConfigurationFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       GitHubPullRequestCommentConfigurationFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       GitHubPullRequestDocumentConfigurationFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       GitHubPullRequestDocumentAttachmentConfigurationFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *     },
 *     AlfrescoConfiguration: {
 *       SiteUrl: "STRING_VALUE", // required
 *       SiteId: "STRING_VALUE", // required
 *       SecretArn: "STRING_VALUE", // required
 *       SslCertificateS3Path: {
 *         Bucket: "STRING_VALUE", // required
 *         Key: "STRING_VALUE", // required
 *       },
 *       CrawlSystemFolders: true || false,
 *       CrawlComments: true || false,
 *       EntityFilter: [
 *         "wiki" || "blog" || "documentLibrary",
 *       ],
 *       DocumentLibraryFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       BlogFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       WikiFieldMappings: [
 *         "<DataSourceToIndexFieldMappingList>",
 *       ],
 *       InclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       ExclusionPatterns: [
 *         "STRING_VALUE",
 *       ],
 *       VpcConfiguration: {
 *         SubnetIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     TemplateConfiguration: {
 *       Template: "DOCUMENT_VALUE",
 *     },
 *   },
 *   VpcConfiguration: {
 *     SubnetIds: [ // required
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [ // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Description: "STRING_VALUE",
 *   Schedule: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE",
 *   LanguageCode: "STRING_VALUE",
 *   CustomDocumentEnrichmentConfiguration: {
 *     InlineConfigurations: [
 *       {
 *         Condition: {
 *           ConditionDocumentAttributeKey: "STRING_VALUE", // required
 *           Operator: "GreaterThan" || "GreaterThanOrEquals" || "LessThan" || "LessThanOrEquals" || "Equals" || "NotEquals" || "Contains" || "NotContains" || "Exists" || "NotExists" || "BeginsWith", // required
 *           ConditionOnValue: {
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         Target: {
 *           TargetDocumentAttributeKey: "STRING_VALUE",
 *           TargetDocumentAttributeValueDeletion: true || false,
 *           TargetDocumentAttributeValue: {
 *             StringValue: "STRING_VALUE",
 *             StringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             LongValue: Number("long"),
 *             DateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         DocumentContentDeletion: true || false,
 *       },
 *     ],
 *     PreExtractionHookConfiguration: {
 *       InvocationCondition: {
 *         ConditionDocumentAttributeKey: "STRING_VALUE", // required
 *         Operator: "GreaterThan" || "GreaterThanOrEquals" || "LessThan" || "LessThanOrEquals" || "Equals" || "NotEquals" || "Contains" || "NotContains" || "Exists" || "NotExists" || "BeginsWith", // required
 *         ConditionOnValue: {
 *           StringValue: "STRING_VALUE",
 *           StringListValue: [
 *             "STRING_VALUE",
 *           ],
 *           LongValue: Number("long"),
 *           DateValue: new Date("TIMESTAMP"),
 *         },
 *       },
 *       LambdaArn: "STRING_VALUE", // required
 *       S3Bucket: "STRING_VALUE", // required
 *     },
 *     PostExtractionHookConfiguration: {
 *       InvocationCondition: {
 *         ConditionDocumentAttributeKey: "STRING_VALUE", // required
 *         Operator: "GreaterThan" || "GreaterThanOrEquals" || "LessThan" || "LessThanOrEquals" || "Equals" || "NotEquals" || "Contains" || "NotContains" || "Exists" || "NotExists" || "BeginsWith", // required
 *         ConditionOnValue: {
 *           StringValue: "STRING_VALUE",
 *           StringListValue: [
 *             "STRING_VALUE",
 *           ],
 *           LongValue: Number("long"),
 *           DateValue: new Date("TIMESTAMP"),
 *         },
 *       },
 *       LambdaArn: "STRING_VALUE", // required
 *       S3Bucket: "STRING_VALUE", // required
 *     },
 *     RoleArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateDataSourceCommandInput - {@link UpdateDataSourceCommandInput}
 * @returns {@link UpdateDataSourceCommandOutput}
 * @see {@link UpdateDataSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSourceCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred with the request. Please fix any inconsistences with your
 *             resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/aws.amazon.com/contact-us"> Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 *
 */
export class UpdateDataSourceCommand extends $Command<
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateDataSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDataSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "UpdateDataSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateDataSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDataSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDataSourceCommandOutput> {
    return deserializeAws_json1_1UpdateDataSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
