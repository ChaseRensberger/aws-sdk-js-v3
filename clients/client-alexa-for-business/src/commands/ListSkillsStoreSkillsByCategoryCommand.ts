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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListSkillsStoreSkillsByCategoryRequest, ListSkillsStoreSkillsByCategoryResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand,
  serializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListSkillsStoreSkillsByCategoryCommand}.
 */
export interface ListSkillsStoreSkillsByCategoryCommandInput extends ListSkillsStoreSkillsByCategoryRequest {}
/**
 * @public
 *
 * The output of {@link ListSkillsStoreSkillsByCategoryCommand}.
 */
export interface ListSkillsStoreSkillsByCategoryCommandOutput
  extends ListSkillsStoreSkillsByCategoryResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists all skills in the Alexa skill store by category.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListSkillsStoreSkillsByCategoryCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListSkillsStoreSkillsByCategoryCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = {
 *   CategoryId: Number("long"), // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSkillsStoreSkillsByCategoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListSkillsStoreSkillsByCategoryCommandInput - {@link ListSkillsStoreSkillsByCategoryCommandInput}
 * @returns {@link ListSkillsStoreSkillsByCategoryCommandOutput}
 * @see {@link ListSkillsStoreSkillsByCategoryCommandInput} for command's `input` shape.
 * @see {@link ListSkillsStoreSkillsByCategoryCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 *
 */
export class ListSkillsStoreSkillsByCategoryCommand extends $Command<
  ListSkillsStoreSkillsByCategoryCommandInput,
  ListSkillsStoreSkillsByCategoryCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: ListSkillsStoreSkillsByCategoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSkillsStoreSkillsByCategoryCommandInput, ListSkillsStoreSkillsByCategoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSkillsStoreSkillsByCategoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ListSkillsStoreSkillsByCategoryCommand";
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
    input: ListSkillsStoreSkillsByCategoryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSkillsStoreSkillsByCategoryCommandOutput> {
    return deserializeAws_json1_1ListSkillsStoreSkillsByCategoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
