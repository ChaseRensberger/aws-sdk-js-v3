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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateInvalidationRequest, CreateInvalidationResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateInvalidationCommand,
  serializeAws_restXmlCreateInvalidationCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 *
 * The input for {@link CreateInvalidationCommand}.
 */
export interface CreateInvalidationCommandInput extends CreateInvalidationRequest {}
/**
 * @public
 *
 * The output of {@link CreateInvalidationCommand}.
 */
export interface CreateInvalidationCommandOutput extends CreateInvalidationResult, __MetadataBearer {}

/**
 * @public
 * <p>Create a new invalidation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateInvalidationCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateInvalidationCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = {
 *   DistributionId: "STRING_VALUE", // required
 *   InvalidationBatch: {
 *     Paths: {
 *       Quantity: Number("int"), // required
 *       Items: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     CallerReference: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateInvalidationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateInvalidationCommandInput - {@link CreateInvalidationCommandInput}
 * @returns {@link CreateInvalidationCommandOutput}
 * @see {@link CreateInvalidationCommandInput} for command's `input` shape.
 * @see {@link CreateInvalidationCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link BatchTooLarge} (client fault)
 *  <p>Invalidation batch specified is too large.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't
 * 			match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link MissingBody} (client fault)
 *  <p>This operation requires a body. Ensure that the body is present and the
 * 				<code>Content-Type</code> header is set.</p>
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *  <p>The specified distribution does not exist.</p>
 *
 * @throws {@link TooManyInvalidationsInProgress} (client fault)
 *  <p>You have exceeded the maximum number of allowable InProgress invalidation batch
 * 			requests, or invalidation objects.</p>
 *
 *
 */
export class CreateInvalidationCommand extends $Command<
  CreateInvalidationCommandInput,
  CreateInvalidationCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: CreateInvalidationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateInvalidationCommandInput, CreateInvalidationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateInvalidationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateInvalidationCommand";
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
  private serialize(input: CreateInvalidationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateInvalidationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInvalidationCommandOutput> {
    return deserializeAws_restXmlCreateInvalidationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
