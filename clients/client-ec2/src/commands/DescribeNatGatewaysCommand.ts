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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeNatGatewaysRequest, DescribeNatGatewaysResult } from "../models/models_4";
import {
  deserializeAws_ec2DescribeNatGatewaysCommand,
  serializeAws_ec2DescribeNatGatewaysCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeNatGatewaysCommand}.
 */
export interface DescribeNatGatewaysCommandInput extends DescribeNatGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNatGatewaysCommand}.
 */
export interface DescribeNatGatewaysCommandOutput extends DescribeNatGatewaysResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your NAT gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNatGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNatGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = {
 *   DryRun: true || false,
 *   Filter: [
 *     {
 *       Name: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NatGatewayIds: [
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeNatGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeNatGatewaysCommandInput - {@link DescribeNatGatewaysCommandInput}
 * @returns {@link DescribeNatGatewaysCommandOutput}
 * @see {@link DescribeNatGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeNatGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To describe a NAT gateway
 * ```javascript
 * // This example describes the NAT gateway for the specified VPC.
 * const input = {
 *   "Filter": [
 *     {
 *       "Name": "vpc-id",
 *       "Values": [
 *         "vpc-1a2b3c4d"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeNatGatewaysCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NatGateways": [
 *     {
 *       "CreateTime": "2015-12-01T12:26:55.983Z",
 *       "NatGatewayAddresses": [
 *         {
 *           "AllocationId": "eipalloc-89c620ec",
 *           "NetworkInterfaceId": "eni-9dec76cd",
 *           "PrivateIp": "10.0.0.149",
 *           "PublicIp": "198.11.222.333"
 *         }
 *       ],
 *       "NatGatewayId": "nat-05dba92075d71c408",
 *       "State": "available",
 *       "SubnetId": "subnet-847e4dc2",
 *       "VpcId": "vpc-1a2b3c4d"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-nat-gateways-1
 * ```
 *
 */
export class DescribeNatGatewaysCommand extends $Command<
  DescribeNatGatewaysCommandInput,
  DescribeNatGatewaysCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DescribeNatGatewaysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeNatGatewaysCommandInput, DescribeNatGatewaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNatGatewaysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeNatGatewaysCommand";
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
  private serialize(input: DescribeNatGatewaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeNatGatewaysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeNatGatewaysCommandOutput> {
    return deserializeAws_ec2DescribeNatGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
