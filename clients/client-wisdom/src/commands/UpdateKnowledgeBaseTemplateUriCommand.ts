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

import { UpdateKnowledgeBaseTemplateUriRequest, UpdateKnowledgeBaseTemplateUriResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateKnowledgeBaseTemplateUriCommand,
  serializeAws_restJson1UpdateKnowledgeBaseTemplateUriCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 *
 * The input for {@link UpdateKnowledgeBaseTemplateUriCommand}.
 */
export interface UpdateKnowledgeBaseTemplateUriCommandInput extends UpdateKnowledgeBaseTemplateUriRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKnowledgeBaseTemplateUriCommand}.
 */
export interface UpdateKnowledgeBaseTemplateUriCommandOutput
  extends UpdateKnowledgeBaseTemplateUriResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the template URI of a knowledge base. This is only supported for knowledge bases
 *       of type EXTERNAL. Include a single variable in <code>$\{variable\}</code> format; this
 *       interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce
 *       article, it has an <code>Id</code> value, and you can set the template URI to
 *         <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*$\{Id\}*\/view</code>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, UpdateKnowledgeBaseTemplateUriCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, UpdateKnowledgeBaseTemplateUriCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const input = {
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   templateUri: "STRING_VALUE", // required
 * };
 * const command = new UpdateKnowledgeBaseTemplateUriCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateKnowledgeBaseTemplateUriCommandInput - {@link UpdateKnowledgeBaseTemplateUriCommandInput}
 * @returns {@link UpdateKnowledgeBaseTemplateUriCommandOutput}
 * @see {@link UpdateKnowledgeBaseTemplateUriCommandInput} for command's `input` shape.
 * @see {@link UpdateKnowledgeBaseTemplateUriCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 *
 */
export class UpdateKnowledgeBaseTemplateUriCommand extends $Command<
  UpdateKnowledgeBaseTemplateUriCommandInput,
  UpdateKnowledgeBaseTemplateUriCommandOutput,
  WisdomClientResolvedConfig
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
  constructor(readonly input: UpdateKnowledgeBaseTemplateUriCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WisdomClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateKnowledgeBaseTemplateUriCommandInput, UpdateKnowledgeBaseTemplateUriCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateKnowledgeBaseTemplateUriCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "UpdateKnowledgeBaseTemplateUriCommand";
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
  private serialize(
    input: UpdateKnowledgeBaseTemplateUriCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateKnowledgeBaseTemplateUriCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateKnowledgeBaseTemplateUriCommandOutput> {
    return deserializeAws_restJson1UpdateKnowledgeBaseTemplateUriCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
