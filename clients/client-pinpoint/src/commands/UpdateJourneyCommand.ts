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

import { UpdateJourneyRequest, UpdateJourneyResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  deserializeAws_restJson1UpdateJourneyCommand,
  serializeAws_restJson1UpdateJourneyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateJourneyCommand}.
 */
export interface UpdateJourneyCommandInput extends UpdateJourneyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateJourneyCommand}.
 */
export interface UpdateJourneyCommandOutput extends UpdateJourneyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the configuration and other settings for a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateJourneyCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateJourneyCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = {
 *   ApplicationId: "STRING_VALUE", // required
 *   JourneyId: "STRING_VALUE", // required
 *   WriteJourneyRequest: {
 *     Activities: {
 *       "<keys>": {
 *         CUSTOM: {
 *           DeliveryUri: "STRING_VALUE",
 *           EndpointTypes: [
 *             "STRING_VALUE",
 *           ],
 *           MessageConfig: {
 *             Data: "STRING_VALUE",
 *           },
 *           NextActivity: "STRING_VALUE",
 *           TemplateName: "STRING_VALUE",
 *           TemplateVersion: "STRING_VALUE",
 *         },
 *         ConditionalSplit: {
 *           Condition: {
 *             Conditions: [
 *               {
 *                 EventCondition: {
 *                   Dimensions: {
 *                     Attributes: {
 *                       "<keys>": {
 *                         AttributeType: "STRING_VALUE",
 *                         Values: [ // required
 *                           "STRING_VALUE",
 *                         ],
 *                       },
 *                     },
 *                     EventType: {
 *                       DimensionType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     Metrics: {
 *                       "<keys>": {
 *                         ComparisonOperator: "STRING_VALUE", // required
 *                         Value: Number("double"), // required
 *                       },
 *                     },
 *                   },
 *                   MessageActivity: "STRING_VALUE",
 *                 },
 *                 SegmentCondition: {
 *                   SegmentId: "STRING_VALUE", // required
 *                 },
 *                 SegmentDimensions: {
 *                   Attributes: {
 *                     "<keys>": {
 *                       AttributeType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                   },
 *                   Behavior: {
 *                     Recency: {
 *                       Duration: "STRING_VALUE", // required
 *                       RecencyType: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   Demographic: {
 *                     AppVersion: {
 *                       DimensionType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     Channel: {
 *                       DimensionType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     DeviceType: {
 *                       DimensionType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     Make: {
 *                       DimensionType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     Model: {
 *                       DimensionType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     Platform: {
 *                       DimensionType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                   },
 *                   Location: {
 *                     Country: {
 *                       DimensionType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     GPSPoint: {
 *                       Coordinates: {
 *                         Latitude: Number("double"), // required
 *                         Longitude: Number("double"), // required
 *                       },
 *                       RangeInKilometers: Number("double"),
 *                     },
 *                   },
 *                   Metrics: {
 *                     "<keys>": {
 *                       ComparisonOperator: "STRING_VALUE", // required
 *                       Value: Number("double"), // required
 *                     },
 *                   },
 *                   UserAttributes: {
 *                     "<keys>": {
 *                       AttributeType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                   },
 *                 },
 *               },
 *             ],
 *             Operator: "STRING_VALUE",
 *           },
 *           EvaluationWaitTime: {
 *             WaitFor: "STRING_VALUE",
 *             WaitUntil: "STRING_VALUE",
 *           },
 *           FalseActivity: "STRING_VALUE",
 *           TrueActivity: "STRING_VALUE",
 *         },
 *         Description: "STRING_VALUE",
 *         EMAIL: {
 *           MessageConfig: {
 *             FromAddress: "STRING_VALUE",
 *           },
 *           NextActivity: "STRING_VALUE",
 *           TemplateName: "STRING_VALUE",
 *           TemplateVersion: "STRING_VALUE",
 *         },
 *         Holdout: {
 *           NextActivity: "STRING_VALUE",
 *           Percentage: Number("int"), // required
 *         },
 *         MultiCondition: {
 *           Branches: [
 *             {
 *               Condition: {
 *                 EventCondition: {
 *                   Dimensions: {
 *                     Attributes: {
 *                       "<keys>": {
 *                         AttributeType: "STRING_VALUE",
 *                         Values: [ // required
 *                           "STRING_VALUE",
 *                         ],
 *                       },
 *                     },
 *                     EventType: {
 *                       DimensionType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     Metrics: {
 *                       "<keys>": {
 *                         ComparisonOperator: "STRING_VALUE", // required
 *                         Value: Number("double"), // required
 *                       },
 *                     },
 *                   },
 *                   MessageActivity: "STRING_VALUE",
 *                 },
 *                 SegmentCondition: {
 *                   SegmentId: "STRING_VALUE", // required
 *                 },
 *                 SegmentDimensions: {
 *                   Attributes: {
 *                     "<keys>": {
 *                       AttributeType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                   },
 *                   Behavior: {
 *                     Recency: {
 *                       Duration: "STRING_VALUE", // required
 *                       RecencyType: "STRING_VALUE", // required
 *                     },
 *                   },
 *                   Demographic: {
 *                     AppVersion: {
 *                       DimensionType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     Channel: {
 *                       DimensionType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     DeviceType: {
 *                       DimensionType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     Make: {
 *                       DimensionType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     Model: {
 *                       DimensionType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     Platform: {
 *                       DimensionType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                   },
 *                   Location: {
 *                     Country: {
 *                       DimensionType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     GPSPoint: {
 *                       Coordinates: {
 *                         Latitude: Number("double"), // required
 *                         Longitude: Number("double"), // required
 *                       },
 *                       RangeInKilometers: Number("double"),
 *                     },
 *                   },
 *                   Metrics: {
 *                     "<keys>": {
 *                       ComparisonOperator: "STRING_VALUE", // required
 *                       Value: Number("double"), // required
 *                     },
 *                   },
 *                   UserAttributes: {
 *                     "<keys>": {
 *                       AttributeType: "STRING_VALUE",
 *                       Values: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                   },
 *                 },
 *               },
 *               NextActivity: "STRING_VALUE",
 *             },
 *           ],
 *           DefaultActivity: "STRING_VALUE",
 *           EvaluationWaitTime: {
 *             WaitFor: "STRING_VALUE",
 *             WaitUntil: "STRING_VALUE",
 *           },
 *         },
 *         PUSH: {
 *           MessageConfig: {
 *             TimeToLive: "STRING_VALUE",
 *           },
 *           NextActivity: "STRING_VALUE",
 *           TemplateName: "STRING_VALUE",
 *           TemplateVersion: "STRING_VALUE",
 *         },
 *         RandomSplit: {
 *           Branches: [
 *             {
 *               NextActivity: "STRING_VALUE",
 *               Percentage: Number("int"),
 *             },
 *           ],
 *         },
 *         SMS: {
 *           MessageConfig: {
 *             MessageType: "STRING_VALUE",
 *             OriginationNumber: "STRING_VALUE",
 *             SenderId: "STRING_VALUE",
 *             EntityId: "STRING_VALUE",
 *             TemplateId: "STRING_VALUE",
 *           },
 *           NextActivity: "STRING_VALUE",
 *           TemplateName: "STRING_VALUE",
 *           TemplateVersion: "STRING_VALUE",
 *         },
 *         Wait: {
 *           NextActivity: "STRING_VALUE",
 *           WaitTime: {
 *             WaitFor: "STRING_VALUE",
 *             WaitUntil: "STRING_VALUE",
 *           },
 *         },
 *         ContactCenter: {
 *           NextActivity: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     CreationDate: "STRING_VALUE",
 *     LastModifiedDate: "STRING_VALUE",
 *     Limits: {
 *       DailyCap: Number("int"),
 *       EndpointReentryCap: Number("int"),
 *       MessagesPerSecond: Number("int"),
 *       EndpointReentryInterval: "STRING_VALUE",
 *     },
 *     LocalTime: true || false,
 *     Name: "STRING_VALUE", // required
 *     QuietTime: {
 *       End: "STRING_VALUE",
 *       Start: "STRING_VALUE",
 *     },
 *     RefreshFrequency: "STRING_VALUE",
 *     Schedule: {
 *       EndTime: new Date("TIMESTAMP"),
 *       StartTime: new Date("TIMESTAMP"),
 *       Timezone: "STRING_VALUE",
 *     },
 *     StartActivity: "STRING_VALUE",
 *     StartCondition: {
 *       Description: "STRING_VALUE",
 *       EventStartCondition: {
 *         EventFilter: {
 *           Dimensions: {
 *             Attributes: {
 *               "<keys>": "<AttributeDimension>",
 *             },
 *             EventType: {
 *               DimensionType: "STRING_VALUE",
 *               Values: [ // required
 *                 "<ListOf__string>",
 *               ],
 *             },
 *             Metrics: {
 *               "<keys>": "<MetricDimension>",
 *             },
 *           },
 *           FilterType: "STRING_VALUE", // required
 *         },
 *         SegmentId: "STRING_VALUE",
 *       },
 *       SegmentStartCondition: {
 *         SegmentId: "STRING_VALUE", // required
 *       },
 *     },
 *     State: "STRING_VALUE",
 *     WaitForQuietTime: true || false,
 *     RefreshOnSegmentUpdate: true || false,
 *     JourneyChannelSettings: {
 *       ConnectCampaignArn: "STRING_VALUE",
 *       ConnectCampaignExecutionRoleArn: "STRING_VALUE",
 *     },
 *     SendingSchedule: true || false,
 *     OpenHours: {
 *       EMAIL: {
 *         "<keys>": [
 *           {
 *             StartTime: "STRING_VALUE",
 *             EndTime: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       SMS: {
 *         "<keys>": [
 *           {
 *             StartTime: "STRING_VALUE",
 *             EndTime: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       PUSH: {
 *         "<keys>": [
 *           {
 *             StartTime: "STRING_VALUE",
 *             EndTime: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       VOICE: {
 *         "<keys>": [
 *           {
 *             StartTime: "STRING_VALUE",
 *             EndTime: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       CUSTOM: {
 *         "<keys>": [
 *           {
 *             StartTime: "STRING_VALUE",
 *             EndTime: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     },
 *     ClosedDays: {
 *       EMAIL: [
 *         {
 *           Name: "STRING_VALUE",
 *           StartDateTime: "STRING_VALUE",
 *           EndDateTime: "STRING_VALUE",
 *         },
 *       ],
 *       SMS: [
 *         {
 *           Name: "STRING_VALUE",
 *           StartDateTime: "STRING_VALUE",
 *           EndDateTime: "STRING_VALUE",
 *         },
 *       ],
 *       PUSH: [
 *         {
 *           Name: "STRING_VALUE",
 *           StartDateTime: "STRING_VALUE",
 *           EndDateTime: "STRING_VALUE",
 *         },
 *       ],
 *       VOICE: [
 *         {
 *           Name: "STRING_VALUE",
 *           StartDateTime: "STRING_VALUE",
 *           EndDateTime: "STRING_VALUE",
 *         },
 *       ],
 *       CUSTOM: [
 *         {
 *           Name: "STRING_VALUE",
 *           StartDateTime: "STRING_VALUE",
 *           EndDateTime: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateJourneyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateJourneyCommandInput - {@link UpdateJourneyCommandInput}
 * @returns {@link UpdateJourneyCommandOutput}
 * @see {@link UpdateJourneyCommandInput} for command's `input` shape.
 * @see {@link UpdateJourneyCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 *
 */
export class UpdateJourneyCommand extends $Command<
  UpdateJourneyCommandInput,
  UpdateJourneyCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: UpdateJourneyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateJourneyCommandInput, UpdateJourneyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateJourneyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateJourneyCommand";
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
  private serialize(input: UpdateJourneyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateJourneyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateJourneyCommandOutput> {
    return deserializeAws_restJson1UpdateJourneyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
