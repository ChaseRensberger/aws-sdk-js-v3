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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { BatchGrantPermissionsRequest, BatchGrantPermissionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchGrantPermissionsCommand,
  serializeAws_restJson1BatchGrantPermissionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link BatchGrantPermissionsCommand}.
 */
export interface BatchGrantPermissionsCommandInput extends BatchGrantPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGrantPermissionsCommand}.
 */
export interface BatchGrantPermissionsCommandOutput extends BatchGrantPermissionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Batch operation to grant permissions to the principal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, BatchGrantPermissionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, BatchGrantPermissionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = {
 *   CatalogId: "STRING_VALUE",
 *   Entries: [ // required
 *     {
 *       Id: "STRING_VALUE", // required
 *       Principal: {
 *         DataLakePrincipalIdentifier: "STRING_VALUE",
 *       },
 *       Resource: {
 *         Catalog: {},
 *         Database: {
 *           CatalogId: "STRING_VALUE",
 *           Name: "STRING_VALUE", // required
 *         },
 *         Table: {
 *           CatalogId: "STRING_VALUE",
 *           DatabaseName: "STRING_VALUE", // required
 *           Name: "STRING_VALUE",
 *           TableWildcard: {},
 *         },
 *         TableWithColumns: {
 *           CatalogId: "STRING_VALUE",
 *           DatabaseName: "STRING_VALUE", // required
 *           Name: "STRING_VALUE", // required
 *           ColumnNames: [
 *             "STRING_VALUE",
 *           ],
 *           ColumnWildcard: {
 *             ExcludedColumnNames: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *         DataLocation: {
 *           CatalogId: "STRING_VALUE",
 *           ResourceArn: "STRING_VALUE", // required
 *         },
 *         DataCellsFilter: {
 *           TableCatalogId: "STRING_VALUE",
 *           DatabaseName: "STRING_VALUE",
 *           TableName: "STRING_VALUE",
 *           Name: "STRING_VALUE",
 *         },
 *         LFTag: {
 *           CatalogId: "STRING_VALUE",
 *           TagKey: "STRING_VALUE", // required
 *           TagValues: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         LFTagPolicy: {
 *           CatalogId: "STRING_VALUE",
 *           ResourceType: "DATABASE" || "TABLE", // required
 *           Expression: [ // required
 *             {
 *               TagKey: "STRING_VALUE", // required
 *               TagValues: [ // required
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           ],
 *         },
 *       },
 *       Permissions: [
 *         "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_TAG" || "ASSOCIATE",
 *       ],
 *       PermissionsWithGrantOption: [
 *         "ALL" || "SELECT" || "ALTER" || "DROP" || "DELETE" || "INSERT" || "DESCRIBE" || "CREATE_DATABASE" || "CREATE_TABLE" || "DATA_LOCATION_ACCESS" || "CREATE_TAG" || "ASSOCIATE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchGrantPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param BatchGrantPermissionsCommandInput - {@link BatchGrantPermissionsCommandInput}
 * @returns {@link BatchGrantPermissionsCommandOutput}
 * @see {@link BatchGrantPermissionsCommandInput} for command's `input` shape.
 * @see {@link BatchGrantPermissionsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 *
 */
export class BatchGrantPermissionsCommand extends $Command<
  BatchGrantPermissionsCommandInput,
  BatchGrantPermissionsCommandOutput,
  LakeFormationClientResolvedConfig
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
  constructor(readonly input: BatchGrantPermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGrantPermissionsCommandInput, BatchGrantPermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGrantPermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "BatchGrantPermissionsCommand";
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
  private serialize(input: BatchGrantPermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGrantPermissionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGrantPermissionsCommandOutput> {
    return deserializeAws_restJson1BatchGrantPermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
