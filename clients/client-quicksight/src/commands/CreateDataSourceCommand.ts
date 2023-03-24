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

import {
  CreateDataSourceRequest,
  CreateDataSourceRequestFilterSensitiveLog,
  CreateDataSourceResponse,
} from "../models/models_2";
import {
  deserializeAws_restJson1CreateDataSourceCommand,
  serializeAws_restJson1CreateDataSourceCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 *
 * The input for {@link CreateDataSourceCommand}.
 */
export interface CreateDataSourceCommandInput extends CreateDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataSourceCommand}.
 */
export interface CreateDataSourceCommandOutput extends CreateDataSourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateDataSourceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateDataSourceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = {
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSourceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Type: "ADOBE_ANALYTICS" || "AMAZON_ELASTICSEARCH" || "ATHENA" || "AURORA" || "AURORA_POSTGRESQL" || "AWS_IOT_ANALYTICS" || "GITHUB" || "JIRA" || "MARIADB" || "MYSQL" || "ORACLE" || "POSTGRESQL" || "PRESTO" || "REDSHIFT" || "S3" || "SALESFORCE" || "SERVICENOW" || "SNOWFLAKE" || "SPARK" || "SQLSERVER" || "TERADATA" || "TWITTER" || "TIMESTREAM" || "AMAZON_OPENSEARCH" || "EXASOL" || "DATABRICKS", // required
 *   DataSourceParameters: { // Union: only one key present
 *     AmazonElasticsearchParameters: {
 *       Domain: "STRING_VALUE", // required
 *     },
 *     AthenaParameters: {
 *       WorkGroup: "STRING_VALUE",
 *       RoleArn: "STRING_VALUE",
 *     },
 *     AuroraParameters: {
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     AuroraPostgreSqlParameters: {
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     AwsIotAnalyticsParameters: {
 *       DataSetName: "STRING_VALUE", // required
 *     },
 *     JiraParameters: {
 *       SiteBaseUrl: "STRING_VALUE", // required
 *     },
 *     MariaDbParameters: {
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     MySqlParameters: {
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     OracleParameters: {
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     PostgreSqlParameters: {
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     PrestoParameters: {
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Catalog: "STRING_VALUE", // required
 *     },
 *     RdsParameters: {
 *       InstanceId: "STRING_VALUE", // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     RedshiftParameters: {
 *       Host: "STRING_VALUE",
 *       Port: Number("int"),
 *       Database: "STRING_VALUE", // required
 *       ClusterId: "STRING_VALUE",
 *     },
 *     S3Parameters: {
 *       ManifestFileLocation: {
 *         Bucket: "STRING_VALUE", // required
 *         Key: "STRING_VALUE", // required
 *       },
 *       RoleArn: "STRING_VALUE",
 *     },
 *     ServiceNowParameters: {
 *       SiteBaseUrl: "STRING_VALUE", // required
 *     },
 *     SnowflakeParameters: {
 *       Host: "STRING_VALUE", // required
 *       Database: "STRING_VALUE", // required
 *       Warehouse: "STRING_VALUE", // required
 *     },
 *     SparkParameters: {
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *     },
 *     SqlServerParameters: {
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     TeradataParameters: {
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       Database: "STRING_VALUE", // required
 *     },
 *     TwitterParameters: {
 *       Query: "STRING_VALUE", // required
 *       MaxRows: Number("int"), // required
 *     },
 *     AmazonOpenSearchParameters: {
 *       Domain: "STRING_VALUE", // required
 *     },
 *     ExasolParameters: {
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *     },
 *     DatabricksParameters: {
 *       Host: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *       SqlEndpointPath: "STRING_VALUE", // required
 *     },
 *   },
 *   Credentials: {
 *     CredentialPair: {
 *       Username: "STRING_VALUE", // required
 *       Password: "STRING_VALUE", // required
 *       AlternateDataSourceParameters: [
 *         { // Union: only one key present
 *           AmazonElasticsearchParameters: {
 *             Domain: "STRING_VALUE", // required
 *           },
 *           AthenaParameters: {
 *             WorkGroup: "STRING_VALUE",
 *             RoleArn: "STRING_VALUE",
 *           },
 *           AuroraParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           AuroraPostgreSqlParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           AwsIotAnalyticsParameters: {
 *             DataSetName: "STRING_VALUE", // required
 *           },
 *           JiraParameters: {
 *             SiteBaseUrl: "STRING_VALUE", // required
 *           },
 *           MariaDbParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           MySqlParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           OracleParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           PostgreSqlParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           PrestoParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Catalog: "STRING_VALUE", // required
 *           },
 *           RdsParameters: {
 *             InstanceId: "STRING_VALUE", // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           RedshiftParameters: {
 *             Host: "STRING_VALUE",
 *             Port: Number("int"),
 *             Database: "STRING_VALUE", // required
 *             ClusterId: "STRING_VALUE",
 *           },
 *           S3Parameters: {
 *             ManifestFileLocation: {
 *               Bucket: "STRING_VALUE", // required
 *               Key: "STRING_VALUE", // required
 *             },
 *             RoleArn: "STRING_VALUE",
 *           },
 *           ServiceNowParameters: {
 *             SiteBaseUrl: "STRING_VALUE", // required
 *           },
 *           SnowflakeParameters: {
 *             Host: "STRING_VALUE", // required
 *             Database: "STRING_VALUE", // required
 *             Warehouse: "STRING_VALUE", // required
 *           },
 *           SparkParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *           },
 *           SqlServerParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           TeradataParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             Database: "STRING_VALUE", // required
 *           },
 *           TwitterParameters: {
 *             Query: "STRING_VALUE", // required
 *             MaxRows: Number("int"), // required
 *           },
 *           AmazonOpenSearchParameters: {
 *             Domain: "STRING_VALUE", // required
 *           },
 *           ExasolParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *           },
 *           DatabricksParameters: {
 *             Host: "STRING_VALUE", // required
 *             Port: Number("int"), // required
 *             SqlEndpointPath: "STRING_VALUE", // required
 *           },
 *         },
 *       ],
 *     },
 *     CopySourceArn: "STRING_VALUE",
 *     SecretArn: "STRING_VALUE",
 *   },
 *   Permissions: [
 *     {
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   VpcConnectionProperties: {
 *     VpcConnectionArn: "STRING_VALUE", // required
 *   },
 *   SslProperties: {
 *     DisableSsl: true || false,
 *   },
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDataSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateDataSourceCommandInput - {@link CreateDataSourceCommandInput}
 * @returns {@link CreateDataSourceCommandOutput}
 * @see {@link CreateDataSourceCommandInput} for command's `input` shape.
 * @see {@link CreateDataSourceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 *
 */
export class CreateDataSourceCommand extends $Command<
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput,
  QuickSightClientResolvedConfig
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
  constructor(readonly input: CreateDataSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataSourceCommandInput, CreateDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "CreateDataSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDataSourceRequestFilterSensitiveLog,
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
  private serialize(input: CreateDataSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDataSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataSourceCommandOutput> {
    return deserializeAws_restJson1CreateDataSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
