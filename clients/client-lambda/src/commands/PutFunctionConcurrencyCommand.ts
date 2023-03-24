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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { Concurrency, PutFunctionConcurrencyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PutFunctionConcurrencyCommand,
  serializeAws_restJson1PutFunctionConcurrencyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link PutFunctionConcurrencyCommand}.
 */
export interface PutFunctionConcurrencyCommandInput extends PutFunctionConcurrencyRequest {}
/**
 * @public
 *
 * The output of {@link PutFunctionConcurrencyCommand}.
 */
export interface PutFunctionConcurrencyCommandOutput extends Concurrency, __MetadataBearer {}

/**
 * @public
 * <p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency
 *       level.</p>
 *          <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished
 *       version. Reserving concurrency both ensures that your function has capacity to process the specified number of
 *       events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see
 *       the current setting for a function.</p>
 *          <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency
 *       for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for
 *       functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html">Lambda function scaling</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutFunctionConcurrencyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutFunctionConcurrencyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = {
 *   FunctionName: "STRING_VALUE", // required
 *   ReservedConcurrentExecutions: Number("int"), // required
 * };
 * const command = new PutFunctionConcurrencyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PutFunctionConcurrencyCommandInput - {@link PutFunctionConcurrencyCommandInput}
 * @returns {@link PutFunctionConcurrencyCommandOutput}
 * @see {@link PutFunctionConcurrencyCommandInput} for command's `input` shape.
 * @see {@link PutFunctionConcurrencyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 *
 */
export class PutFunctionConcurrencyCommand extends $Command<
  PutFunctionConcurrencyCommandInput,
  PutFunctionConcurrencyCommandOutput,
  LambdaClientResolvedConfig
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
  constructor(readonly input: PutFunctionConcurrencyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutFunctionConcurrencyCommandInput, PutFunctionConcurrencyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutFunctionConcurrencyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "PutFunctionConcurrencyCommand";
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
  private serialize(input: PutFunctionConcurrencyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutFunctionConcurrencyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutFunctionConcurrencyCommandOutput> {
    return deserializeAws_restJson1PutFunctionConcurrencyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
