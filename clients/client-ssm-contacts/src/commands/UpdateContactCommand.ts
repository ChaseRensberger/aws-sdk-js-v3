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

import { UpdateContactRequest, UpdateContactResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateContactCommand,
  serializeAws_json1_1UpdateContactCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 *
 * The input for {@link UpdateContactCommand}.
 */
export interface UpdateContactCommandInput extends UpdateContactRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactCommand}.
 */
export interface UpdateContactCommandOutput extends UpdateContactResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates the contact or escalation plan specified. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, UpdateContactCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, UpdateContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = {
 *   ContactId: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   Plan: {
 *     Stages: [ // required
 *       {
 *         DurationInMinutes: Number("int"), // required
 *         Targets: [ // required
 *           {
 *             ChannelTargetInfo: {
 *               ContactChannelId: "STRING_VALUE", // required
 *               RetryIntervalInMinutes: Number("int"),
 *             },
 *             ContactTargetInfo: {
 *               ContactId: "STRING_VALUE",
 *               IsEssential: true || false, // required
 *             },
 *           },
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateContactCommandInput - {@link UpdateContactCommandInput}
 * @returns {@link UpdateContactCommandOutput}
 * @see {@link UpdateContactCommandInput} for command's `input` shape.
 * @see {@link UpdateContactCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link DataEncryptionException} (client fault)
 *  <p>The operation failed to due an encryption key error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while
 *          processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 *
 * @example To update the engagement plan of contact
 * ```javascript
 * // The following update-contact example updates the engagement plan of the contact Akua to include the three types of contacts channels. This is done after creating contact channels for Akua.
 * const input = {
 *   "ContactId": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/akuam",
 *   "Plan": {
 *     "Stages": [
 *       {
 *         "DurationInMinutes": 5,
 *         "Targets": [
 *           {
 *             "ChannelTargetInfo": {
 *               "ContactChannelId": "arn:aws:ssm-contacts:us-east-2:111122223333:contact-channel/akuam/beb25840-5ac8-4644-95cc-7a8de390fa65",
 *               "RetryIntervalInMinutes": 1
 *             }
 *           }
 *         ]
 *       },
 *       {
 *         "DurationInMinutes": 5,
 *         "Targets": [
 *           {
 *             "ChannelTargetInfo": {
 *               "ContactChannelId": "arn:aws:ssm-contacts:us-east-2:111122223333:contact-channel/akuam/49f3c24d-5f9f-4638-ae25-3f49e04229ad",
 *               "RetryIntervalInMinutes": 1
 *             }
 *           }
 *         ]
 *       },
 *       {
 *         "DurationInMinutes": 5,
 *         "Targets": [
 *           {
 *             "ChannelTargetInfo": {
 *               "ContactChannelId": "arn:aws:ssm-contacts:us-east-2:111122223333:contact-channel/akuam/77d4f447-f619-4954-afff-85551e369c2a",
 *               "RetryIntervalInMinutes": 1
 *             }
 *           }
 *         ]
 *       }
 *     ]
 *   }
 * };
 * const command = new UpdateContactCommand(input);
 * await client.send(command);
 * // example id: to-update-the-engagement-plan-of-contact-1630437436599
 * ```
 *
 */
export class UpdateContactCommand extends $Command<
  UpdateContactCommandInput,
  UpdateContactCommandOutput,
  SSMContactsClientResolvedConfig
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
  constructor(readonly input: UpdateContactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateContactCommandInput, UpdateContactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateContactCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "UpdateContactCommand";
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
  private serialize(input: UpdateContactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateContactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateContactCommandOutput> {
    return deserializeAws_json1_1UpdateContactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
