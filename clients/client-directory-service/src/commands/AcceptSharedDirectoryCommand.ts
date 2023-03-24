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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import {
  AcceptSharedDirectoryRequest,
  AcceptSharedDirectoryResult,
  AcceptSharedDirectoryResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AcceptSharedDirectoryCommand,
  serializeAws_json1_1AcceptSharedDirectoryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link AcceptSharedDirectoryCommand}.
 */
export interface AcceptSharedDirectoryCommandInput extends AcceptSharedDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link AcceptSharedDirectoryCommand}.
 */
export interface AcceptSharedDirectoryCommandOutput extends AcceptSharedDirectoryResult, __MetadataBearer {}

/**
 * @public
 * <p>Accepts a directory sharing request that was sent from the directory owner account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, AcceptSharedDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, AcceptSharedDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = {
 *   SharedDirectoryId: "STRING_VALUE", // required
 * };
 * const command = new AcceptSharedDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AcceptSharedDirectoryCommandInput - {@link AcceptSharedDirectoryCommandInput}
 * @returns {@link AcceptSharedDirectoryCommandOutput}
 * @see {@link AcceptSharedDirectoryCommandInput} for command's `input` shape.
 * @see {@link AcceptSharedDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryAlreadySharedException} (client fault)
 *  <p>The specified directory has already been shared with this Amazon Web Services account.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 *
 */
export class AcceptSharedDirectoryCommand extends $Command<
  AcceptSharedDirectoryCommandInput,
  AcceptSharedDirectoryCommandOutput,
  DirectoryServiceClientResolvedConfig
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
  constructor(readonly input: AcceptSharedDirectoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcceptSharedDirectoryCommandInput, AcceptSharedDirectoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcceptSharedDirectoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "AcceptSharedDirectoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: AcceptSharedDirectoryResultFilterSensitiveLog,
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
  private serialize(input: AcceptSharedDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AcceptSharedDirectoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcceptSharedDirectoryCommandOutput> {
    return deserializeAws_json1_1AcceptSharedDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
