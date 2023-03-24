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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateCrawlerRequest, CreateCrawlerResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateCrawlerCommand,
  serializeAws_json1_1CreateCrawlerCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateCrawlerCommand}.
 */
export interface CreateCrawlerCommandInput extends CreateCrawlerRequest {}
/**
 * @public
 *
 * The output of {@link CreateCrawlerCommand}.
 */
export interface CreateCrawlerCommandOutput extends CreateCrawlerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new crawler with specified targets, role, configuration, and optional schedule.
 *       At least one crawl target must be specified, in the <code>s3Targets</code> field, the
 *         <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateCrawlerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateCrawlerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = {
 *   Name: "STRING_VALUE", // required
 *   Role: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Targets: {
 *     S3Targets: [
 *       {
 *         Path: "STRING_VALUE",
 *         Exclusions: [
 *           "STRING_VALUE",
 *         ],
 *         ConnectionName: "STRING_VALUE",
 *         SampleSize: Number("int"),
 *         EventQueueArn: "STRING_VALUE",
 *         DlqEventQueueArn: "STRING_VALUE",
 *       },
 *     ],
 *     JdbcTargets: [
 *       {
 *         ConnectionName: "STRING_VALUE",
 *         Path: "STRING_VALUE",
 *         Exclusions: [
 *           "STRING_VALUE",
 *         ],
 *         EnableAdditionalMetadata: [
 *           "COMMENTS" || "RAWTYPES",
 *         ],
 *       },
 *     ],
 *     MongoDBTargets: [
 *       {
 *         ConnectionName: "STRING_VALUE",
 *         Path: "STRING_VALUE",
 *         ScanAll: true || false,
 *       },
 *     ],
 *     DynamoDBTargets: [
 *       {
 *         Path: "STRING_VALUE",
 *         scanAll: true || false,
 *         scanRate: Number("double"),
 *       },
 *     ],
 *     CatalogTargets: [
 *       {
 *         DatabaseName: "STRING_VALUE", // required
 *         Tables: [ // required
 *           "STRING_VALUE",
 *         ],
 *         ConnectionName: "STRING_VALUE",
 *         EventQueueArn: "STRING_VALUE",
 *         DlqEventQueueArn: "STRING_VALUE",
 *       },
 *     ],
 *     DeltaTargets: [
 *       {
 *         DeltaTables: [
 *           "STRING_VALUE",
 *         ],
 *         ConnectionName: "STRING_VALUE",
 *         WriteManifest: true || false,
 *         CreateNativeDeltaTable: true || false,
 *       },
 *     ],
 *   },
 *   Schedule: "STRING_VALUE",
 *   Classifiers: [
 *     "STRING_VALUE",
 *   ],
 *   TablePrefix: "STRING_VALUE",
 *   SchemaChangePolicy: {
 *     UpdateBehavior: "LOG" || "UPDATE_IN_DATABASE",
 *     DeleteBehavior: "LOG" || "DELETE_FROM_DATABASE" || "DEPRECATE_IN_DATABASE",
 *   },
 *   RecrawlPolicy: {
 *     RecrawlBehavior: "CRAWL_EVERYTHING" || "CRAWL_NEW_FOLDERS_ONLY" || "CRAWL_EVENT_MODE",
 *   },
 *   LineageConfiguration: {
 *     CrawlerLineageSettings: "ENABLE" || "DISABLE",
 *   },
 *   LakeFormationConfiguration: {
 *     UseLakeFormationCredentials: true || false,
 *     AccountId: "STRING_VALUE",
 *   },
 *   Configuration: "STRING_VALUE",
 *   CrawlerSecurityConfiguration: "STRING_VALUE",
 *   Tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCrawlerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateCrawlerCommandInput - {@link CreateCrawlerCommandInput}
 * @returns {@link CreateCrawlerCommandOutput}
 * @see {@link CreateCrawlerCommandInput} for command's `input` shape.
 * @see {@link CreateCrawlerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 *
 */
export class CreateCrawlerCommand extends $Command<
  CreateCrawlerCommandInput,
  CreateCrawlerCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: CreateCrawlerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCrawlerCommandInput, CreateCrawlerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateCrawlerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateCrawlerCommand";
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
  private serialize(input: CreateCrawlerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCrawlerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCrawlerCommandOutput> {
    return deserializeAws_json1_1CreateCrawlerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
