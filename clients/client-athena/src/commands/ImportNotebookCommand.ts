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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { ImportNotebookInput, ImportNotebookOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ImportNotebookCommand,
  serializeAws_json1_1ImportNotebookCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ImportNotebookCommand}.
 */
export interface ImportNotebookCommandInput extends ImportNotebookInput {}
/**
 * @public
 *
 * The output of {@link ImportNotebookCommand}.
 */
export interface ImportNotebookCommandOutput extends ImportNotebookOutput, __MetadataBearer {}

/**
 * @public
 * <p>Imports a single <code>ipynb</code> file to a Spark enabled workgroup. The maximum
 *             file size that can be imported is 10 megabytes. If an <code>ipynb</code> file with the
 *             same name already exists in the workgroup, throws an error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ImportNotebookCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ImportNotebookCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = {
 *   WorkGroup: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Payload: "STRING_VALUE", // required
 *   Type: "IPYNB", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new ImportNotebookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ImportNotebookCommandInput - {@link ImportNotebookCommandInput}
 * @returns {@link ImportNotebookCommandOutput}
 * @see {@link ImportNotebookCommandInput} for command's `input` shape.
 * @see {@link ImportNotebookCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 *
 */
export class ImportNotebookCommand extends $Command<
  ImportNotebookCommandInput,
  ImportNotebookCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: ImportNotebookCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportNotebookCommandInput, ImportNotebookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportNotebookCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ImportNotebookCommand";
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
  private serialize(input: ImportNotebookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportNotebookCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportNotebookCommandOutput> {
    return deserializeAws_json1_1ImportNotebookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
