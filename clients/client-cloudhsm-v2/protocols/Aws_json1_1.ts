import {
  CopyBackupToRegionCommandInput,
  CopyBackupToRegionCommandOutput
} from "../commands/CopyBackupToRegionCommand";
import {
  CreateClusterCommandInput,
  CreateClusterCommandOutput
} from "../commands/CreateClusterCommand";
import {
  CreateHsmCommandInput,
  CreateHsmCommandOutput
} from "../commands/CreateHsmCommand";
import {
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput
} from "../commands/DeleteBackupCommand";
import {
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput
} from "../commands/DeleteClusterCommand";
import {
  DeleteHsmCommandInput,
  DeleteHsmCommandOutput
} from "../commands/DeleteHsmCommand";
import {
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput
} from "../commands/DescribeBackupsCommand";
import {
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput
} from "../commands/DescribeClustersCommand";
import {
  InitializeClusterCommandInput,
  InitializeClusterCommandOutput
} from "../commands/InitializeClusterCommand";
import {
  ListTagsCommandInput,
  ListTagsCommandOutput
} from "../commands/ListTagsCommand";
import {
  RestoreBackupCommandInput,
  RestoreBackupCommandOutput
} from "../commands/RestoreBackupCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  Backup,
  Certificates,
  CloudHsmAccessDeniedException,
  CloudHsmInternalFailureException,
  CloudHsmInvalidRequestException,
  CloudHsmResourceNotFoundException,
  CloudHsmServiceException,
  Cluster,
  CopyBackupToRegionRequest,
  CopyBackupToRegionResponse,
  CreateClusterRequest,
  CreateClusterResponse,
  CreateHsmRequest,
  CreateHsmResponse,
  DeleteBackupRequest,
  DeleteBackupResponse,
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteHsmRequest,
  DeleteHsmResponse,
  DescribeBackupsRequest,
  DescribeBackupsResponse,
  DescribeClustersRequest,
  DescribeClustersResponse,
  DestinationBackup,
  Hsm,
  InitializeClusterRequest,
  InitializeClusterResponse,
  ListTagsRequest,
  ListTagsResponse,
  RestoreBackupRequest,
  RestoreBackupResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CopyBackupToRegionCommand(
  input: CopyBackupToRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "BaldrApiService.CopyBackupToRegion";
  let body: any = {};
  const wrappedBody: any = {
    CopyBackupToRegionRequest: serializeAws_json1_1CopyBackupToRegionRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CopyBackupToRegion",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateClusterCommand(
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "BaldrApiService.CreateCluster";
  let body: any = {};
  const wrappedBody: any = {
    CreateClusterRequest: serializeAws_json1_1CreateClusterRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateCluster",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateHsmCommand(
  input: CreateHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "BaldrApiService.CreateHsm";
  let body: any = {};
  const wrappedBody: any = {
    CreateHsmRequest: serializeAws_json1_1CreateHsmRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateHsm",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteBackupCommand(
  input: DeleteBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "BaldrApiService.DeleteBackup";
  let body: any = {};
  const wrappedBody: any = {
    DeleteBackupRequest: serializeAws_json1_1DeleteBackupRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteBackup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteClusterCommand(
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "BaldrApiService.DeleteCluster";
  let body: any = {};
  const wrappedBody: any = {
    DeleteClusterRequest: serializeAws_json1_1DeleteClusterRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteCluster",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteHsmCommand(
  input: DeleteHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "BaldrApiService.DeleteHsm";
  let body: any = {};
  const wrappedBody: any = {
    DeleteHsmRequest: serializeAws_json1_1DeleteHsmRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteHsm",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeBackupsCommand(
  input: DescribeBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "BaldrApiService.DescribeBackups";
  let body: any = {};
  const wrappedBody: any = {
    DescribeBackupsRequest: serializeAws_json1_1DescribeBackupsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeBackups",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeClustersCommand(
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "BaldrApiService.DescribeClusters";
  let body: any = {};
  const wrappedBody: any = {
    DescribeClustersRequest: serializeAws_json1_1DescribeClustersRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeClusters",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1InitializeClusterCommand(
  input: InitializeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "BaldrApiService.InitializeCluster";
  let body: any = {};
  const wrappedBody: any = {
    InitializeClusterRequest: serializeAws_json1_1InitializeClusterRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/InitializeCluster",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTagsCommand(
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "BaldrApiService.ListTags";
  let body: any = {};
  const wrappedBody: any = {
    ListTagsRequest: serializeAws_json1_1ListTagsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTags",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RestoreBackupCommand(
  input: RestoreBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "BaldrApiService.RestoreBackup";
  let body: any = {};
  const wrappedBody: any = {
    RestoreBackupRequest: serializeAws_json1_1RestoreBackupRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RestoreBackup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "BaldrApiService.TagResource";
  let body: any = {};
  const wrappedBody: any = {
    TagResourceRequest: serializeAws_json1_1TagResourceRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "BaldrApiService.UntagResource";
  let body: any = {};
  const wrappedBody: any = {
    UntagResourceRequest: serializeAws_json1_1UntagResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagResource",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1CopyBackupToRegionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyBackupToRegionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CopyBackupToRegionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CopyBackupToRegionResponse(
    data.CopyBackupToRegionResponse,
    context
  );
  const response: CopyBackupToRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CopyBackupToRegionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CopyBackupToRegionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyBackupToRegionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
      response = await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
      response = await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
      response = await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
      response = await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.baldr.api.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateClusterResponse(
    data.CreateClusterResponse,
    context
  );
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateClusterResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
      response = await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
      response = await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
      response = await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
      response = await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.baldr.api.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateHsmCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHsmResponse(
    data.CreateHsmResponse,
    context
  );
  const response: CreateHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateHsmResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateHsmCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
      response = await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
      response = await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
      response = await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
      response = await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.baldr.api.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteBackupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBackupResponse(
    data.DeleteBackupResponse,
    context
  );
  const response: DeleteBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteBackupResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteBackupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
      response = await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
      response = await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
      response = await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
      response = await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.baldr.api.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteClusterResponse(
    data.DeleteClusterResponse,
    context
  );
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteClusterResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
      response = await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
      response = await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
      response = await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
      response = await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.baldr.api.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteHsmCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteHsmResponse(
    data.DeleteHsmResponse,
    context
  );
  const response: DeleteHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteHsmResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteHsmCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
      response = await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
      response = await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
      response = await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
      response = await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.baldr.api.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeBackupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBackupsResponse(
    data.DescribeBackupsResponse,
    context
  );
  const response: DescribeBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBackupsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeBackupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
      response = await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
      response = await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
      response = await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
      response = await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.baldr.api.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeClustersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClustersResponse(
    data.DescribeClustersResponse,
    context
  );
  const response: DescribeClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeClustersResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeClustersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
      response = await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
      response = await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
      response = await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.baldr.api.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1InitializeClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitializeClusterCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1InitializeClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InitializeClusterResponse(
    data.InitializeClusterResponse,
    context
  );
  const response: InitializeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InitializeClusterResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1InitializeClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitializeClusterCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
      response = await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
      response = await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
      response = await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
      response = await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.baldr.api.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsResponse(
    data.ListTagsResponse,
    context
  );
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
      response = await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
      response = await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
      response = await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
      response = await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.baldr.api.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RestoreBackupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreBackupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RestoreBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreBackupResponse(
    data.RestoreBackupResponse,
    context
  );
  const response: RestoreBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RestoreBackupResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RestoreBackupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreBackupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
      response = await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
      response = await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
      response = await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
      response = await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.baldr.api.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(
    data.TagResourceResponse,
    context
  );
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
      response = await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
      response = await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
      response = await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
      response = await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.baldr.api.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(
    data.UntagResourceResponse,
    context
  );
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmAccessDeniedException":
      response = await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInternalFailureException":
      response = await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmInvalidRequestException":
      response = await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmResourceNotFoundException":
      response = await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm.api.service#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.baldr.api.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CloudHsmAccessDeniedException> => {
  const deserialized: any = deserializeAws_json1_1CloudHsmAccessDeniedException(
    output.body,
    context
  );
  const contents: CloudHsmAccessDeniedException = {
    __type: "CloudHsmAccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CloudHsmInternalFailureException> => {
  const deserialized: any = deserializeAws_json1_1CloudHsmInternalFailureException(
    output.body,
    context
  );
  const contents: CloudHsmInternalFailureException = {
    __type: "CloudHsmInternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CloudHsmInvalidRequestException> => {
  const deserialized: any = deserializeAws_json1_1CloudHsmInvalidRequestException(
    output.body,
    context
  );
  const contents: CloudHsmInvalidRequestException = {
    __type: "CloudHsmInvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CloudHsmResourceNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1CloudHsmResourceNotFoundException(
    output.body,
    context
  );
  const contents: CloudHsmResourceNotFoundException = {
    __type: "CloudHsmResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmServiceExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CloudHsmServiceException> => {
  const deserialized: any = deserializeAws_json1_1CloudHsmServiceException(
    output.body,
    context
  );
  const contents: CloudHsmServiceException = {
    __type: "CloudHsmServiceException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CopyBackupToRegionRequest = (
  input: CopyBackupToRegionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BackupId !== undefined) {
    bodyParams["BackupId"] = input.BackupId;
  }
  if (input.DestinationRegion !== undefined) {
    bodyParams["DestinationRegion"] = input.DestinationRegion;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateClusterRequest = (
  input: CreateClusterRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.HsmType !== undefined) {
    bodyParams["HsmType"] = input.HsmType;
  }
  if (input.SourceBackupId !== undefined) {
    bodyParams["SourceBackupId"] = input.SourceBackupId;
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIds(
      input.SubnetIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateHsmRequest = (
  input: CreateHsmRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AvailabilityZone !== undefined) {
    bodyParams["AvailabilityZone"] = input.AvailabilityZone;
  }
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.IpAddress !== undefined) {
    bodyParams["IpAddress"] = input.IpAddress;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteBackupRequest = (
  input: DeleteBackupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BackupId !== undefined) {
    bodyParams["BackupId"] = input.BackupId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteClusterRequest = (
  input: DeleteClusterRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteHsmRequest = (
  input: DeleteHsmRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.EniId !== undefined) {
    bodyParams["EniId"] = input.EniId;
  }
  if (input.EniIp !== undefined) {
    bodyParams["EniIp"] = input.EniIp;
  }
  if (input.HsmId !== undefined) {
    bodyParams["HsmId"] = input.HsmId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeBackupsRequest = (
  input: DescribeBackupsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.SortAscending !== undefined) {
    bodyParams["SortAscending"] = input.SortAscending;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeClustersRequest = (
  input: DescribeClustersRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1Filters = (
  input: { [key: string]: Array<string> },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1Strings(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_1InitializeClusterRequest = (
  input: InitializeClusterRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.SignedCert !== undefined) {
    bodyParams["SignedCert"] = input.SignedCert;
  }
  if (input.TrustAnchor !== undefined) {
    bodyParams["TrustAnchor"] = input.TrustAnchor;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsRequest = (
  input: ListTagsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  return bodyParams;
};

const serializeAws_json1_1RestoreBackupRequest = (
  input: RestoreBackupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BackupId !== undefined) {
    bodyParams["BackupId"] = input.BackupId;
  }
  return bodyParams;
};

const serializeAws_json1_1Strings = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1SubnetIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.TagList !== undefined) {
    bodyParams["TagList"] = serializeAws_json1_1TagList(input.TagList, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.TagKeyList !== undefined) {
    bodyParams["TagKeyList"] = serializeAws_json1_1TagKeyList(
      input.TagKeyList,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1Backup = (
  output: any,
  context: __SerdeContext
): Backup => {
  let contents: any = {
    __type: "Backup",
    BackupId: undefined,
    BackupState: undefined,
    ClusterId: undefined,
    CopyTimestamp: undefined,
    CreateTimestamp: undefined,
    DeleteTimestamp: undefined,
    SourceBackup: undefined,
    SourceCluster: undefined,
    SourceRegion: undefined
  };
  if (output.BackupId !== undefined) {
    contents.BackupId = output.BackupId;
  }
  if (output.BackupState !== undefined) {
    contents.BackupState = output.BackupState;
  }
  if (output.ClusterId !== undefined) {
    contents.ClusterId = output.ClusterId;
  }
  if (output.CopyTimestamp !== undefined) {
    contents.CopyTimestamp = new Date(
      output.CopyTimestamp % 1 != 0
        ? Math.round(output.CopyTimestamp * 1000)
        : output.CopyTimestamp
    );
  }
  if (output.CreateTimestamp !== undefined) {
    contents.CreateTimestamp = new Date(
      output.CreateTimestamp % 1 != 0
        ? Math.round(output.CreateTimestamp * 1000)
        : output.CreateTimestamp
    );
  }
  if (output.DeleteTimestamp !== undefined) {
    contents.DeleteTimestamp = new Date(
      output.DeleteTimestamp % 1 != 0
        ? Math.round(output.DeleteTimestamp * 1000)
        : output.DeleteTimestamp
    );
  }
  if (output.SourceBackup !== undefined) {
    contents.SourceBackup = output.SourceBackup;
  }
  if (output.SourceCluster !== undefined) {
    contents.SourceCluster = output.SourceCluster;
  }
  if (output.SourceRegion !== undefined) {
    contents.SourceRegion = output.SourceRegion;
  }
  return contents;
};

const deserializeAws_json1_1Backups = (
  output: any,
  context: __SerdeContext
): Array<Backup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Backup(entry, context)
  );
};

const deserializeAws_json1_1Certificates = (
  output: any,
  context: __SerdeContext
): Certificates => {
  let contents: any = {
    __type: "Certificates",
    AwsHardwareCertificate: undefined,
    ClusterCertificate: undefined,
    ClusterCsr: undefined,
    HsmCertificate: undefined,
    ManufacturerHardwareCertificate: undefined
  };
  if (output.AwsHardwareCertificate !== undefined) {
    contents.AwsHardwareCertificate = output.AwsHardwareCertificate;
  }
  if (output.ClusterCertificate !== undefined) {
    contents.ClusterCertificate = output.ClusterCertificate;
  }
  if (output.ClusterCsr !== undefined) {
    contents.ClusterCsr = output.ClusterCsr;
  }
  if (output.HsmCertificate !== undefined) {
    contents.HsmCertificate = output.HsmCertificate;
  }
  if (output.ManufacturerHardwareCertificate !== undefined) {
    contents.ManufacturerHardwareCertificate =
      output.ManufacturerHardwareCertificate;
  }
  return contents;
};

const deserializeAws_json1_1Cluster = (
  output: any,
  context: __SerdeContext
): Cluster => {
  let contents: any = {
    __type: "Cluster",
    BackupPolicy: undefined,
    Certificates: undefined,
    ClusterId: undefined,
    CreateTimestamp: undefined,
    HsmType: undefined,
    Hsms: undefined,
    PreCoPassword: undefined,
    SecurityGroup: undefined,
    SourceBackupId: undefined,
    State: undefined,
    StateMessage: undefined,
    SubnetMapping: undefined,
    VpcId: undefined
  };
  if (output.BackupPolicy !== undefined) {
    contents.BackupPolicy = output.BackupPolicy;
  }
  if (output.Certificates !== undefined) {
    contents.Certificates = deserializeAws_json1_1Certificates(
      output.Certificates,
      context
    );
  }
  if (output.ClusterId !== undefined) {
    contents.ClusterId = output.ClusterId;
  }
  if (output.CreateTimestamp !== undefined) {
    contents.CreateTimestamp = new Date(
      output.CreateTimestamp % 1 != 0
        ? Math.round(output.CreateTimestamp * 1000)
        : output.CreateTimestamp
    );
  }
  if (output.HsmType !== undefined) {
    contents.HsmType = output.HsmType;
  }
  if (output.Hsms !== undefined) {
    contents.Hsms = deserializeAws_json1_1Hsms(output.Hsms, context);
  }
  if (output.PreCoPassword !== undefined) {
    contents.PreCoPassword = output.PreCoPassword;
  }
  if (output.SecurityGroup !== undefined) {
    contents.SecurityGroup = output.SecurityGroup;
  }
  if (output.SourceBackupId !== undefined) {
    contents.SourceBackupId = output.SourceBackupId;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  if (output.StateMessage !== undefined) {
    contents.StateMessage = output.StateMessage;
  }
  if (output.SubnetMapping !== undefined) {
    contents.SubnetMapping = deserializeAws_json1_1ExternalSubnetMapping(
      output.SubnetMapping,
      context
    );
  }
  if (output.VpcId !== undefined) {
    contents.VpcId = output.VpcId;
  }
  return contents;
};

const deserializeAws_json1_1Clusters = (
  output: any,
  context: __SerdeContext
): Array<Cluster> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Cluster(entry, context)
  );
};

const deserializeAws_json1_1CopyBackupToRegionResponse = (
  output: any,
  context: __SerdeContext
): CopyBackupToRegionResponse => {
  let contents: any = {
    __type: "CopyBackupToRegionResponse",
    DestinationBackup: undefined
  };
  if (output.DestinationBackup !== undefined) {
    contents.DestinationBackup = deserializeAws_json1_1DestinationBackup(
      output.DestinationBackup,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateClusterResponse = (
  output: any,
  context: __SerdeContext
): CreateClusterResponse => {
  let contents: any = {
    __type: "CreateClusterResponse",
    Cluster: undefined
  };
  if (output.Cluster !== undefined) {
    contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
  }
  return contents;
};

const deserializeAws_json1_1CreateHsmResponse = (
  output: any,
  context: __SerdeContext
): CreateHsmResponse => {
  let contents: any = {
    __type: "CreateHsmResponse",
    Hsm: undefined
  };
  if (output.Hsm !== undefined) {
    contents.Hsm = deserializeAws_json1_1Hsm(output.Hsm, context);
  }
  return contents;
};

const deserializeAws_json1_1DeleteBackupResponse = (
  output: any,
  context: __SerdeContext
): DeleteBackupResponse => {
  let contents: any = {
    __type: "DeleteBackupResponse",
    Backup: undefined
  };
  if (output.Backup !== undefined) {
    contents.Backup = deserializeAws_json1_1Backup(output.Backup, context);
  }
  return contents;
};

const deserializeAws_json1_1DeleteClusterResponse = (
  output: any,
  context: __SerdeContext
): DeleteClusterResponse => {
  let contents: any = {
    __type: "DeleteClusterResponse",
    Cluster: undefined
  };
  if (output.Cluster !== undefined) {
    contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
  }
  return contents;
};

const deserializeAws_json1_1DeleteHsmResponse = (
  output: any,
  context: __SerdeContext
): DeleteHsmResponse => {
  let contents: any = {
    __type: "DeleteHsmResponse",
    HsmId: undefined
  };
  if (output.HsmId !== undefined) {
    contents.HsmId = output.HsmId;
  }
  return contents;
};

const deserializeAws_json1_1DescribeBackupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeBackupsResponse => {
  let contents: any = {
    __type: "DescribeBackupsResponse",
    Backups: undefined,
    NextToken: undefined
  };
  if (output.Backups !== undefined) {
    contents.Backups = deserializeAws_json1_1Backups(output.Backups, context);
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeClustersResponse = (
  output: any,
  context: __SerdeContext
): DescribeClustersResponse => {
  let contents: any = {
    __type: "DescribeClustersResponse",
    Clusters: undefined,
    NextToken: undefined
  };
  if (output.Clusters !== undefined) {
    contents.Clusters = deserializeAws_json1_1Clusters(
      output.Clusters,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DestinationBackup = (
  output: any,
  context: __SerdeContext
): DestinationBackup => {
  let contents: any = {
    __type: "DestinationBackup",
    CreateTimestamp: undefined,
    SourceBackup: undefined,
    SourceCluster: undefined,
    SourceRegion: undefined
  };
  if (output.CreateTimestamp !== undefined) {
    contents.CreateTimestamp = new Date(
      output.CreateTimestamp % 1 != 0
        ? Math.round(output.CreateTimestamp * 1000)
        : output.CreateTimestamp
    );
  }
  if (output.SourceBackup !== undefined) {
    contents.SourceBackup = output.SourceBackup;
  }
  if (output.SourceCluster !== undefined) {
    contents.SourceCluster = output.SourceCluster;
  }
  if (output.SourceRegion !== undefined) {
    contents.SourceRegion = output.SourceRegion;
  }
  return contents;
};

const deserializeAws_json1_1ExternalSubnetMapping = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1Hsm = (
  output: any,
  context: __SerdeContext
): Hsm => {
  let contents: any = {
    __type: "Hsm",
    AvailabilityZone: undefined,
    ClusterId: undefined,
    EniId: undefined,
    EniIp: undefined,
    HsmId: undefined,
    State: undefined,
    StateMessage: undefined,
    SubnetId: undefined
  };
  if (output.AvailabilityZone !== undefined) {
    contents.AvailabilityZone = output.AvailabilityZone;
  }
  if (output.ClusterId !== undefined) {
    contents.ClusterId = output.ClusterId;
  }
  if (output.EniId !== undefined) {
    contents.EniId = output.EniId;
  }
  if (output.EniIp !== undefined) {
    contents.EniIp = output.EniIp;
  }
  if (output.HsmId !== undefined) {
    contents.HsmId = output.HsmId;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  if (output.StateMessage !== undefined) {
    contents.StateMessage = output.StateMessage;
  }
  if (output.SubnetId !== undefined) {
    contents.SubnetId = output.SubnetId;
  }
  return contents;
};

const deserializeAws_json1_1Hsms = (
  output: any,
  context: __SerdeContext
): Array<Hsm> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Hsm(entry, context)
  );
};

const deserializeAws_json1_1InitializeClusterResponse = (
  output: any,
  context: __SerdeContext
): InitializeClusterResponse => {
  let contents: any = {
    __type: "InitializeClusterResponse",
    State: undefined,
    StateMessage: undefined
  };
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  if (output.StateMessage !== undefined) {
    contents.StateMessage = output.StateMessage;
  }
  return contents;
};

const deserializeAws_json1_1ListTagsResponse = (
  output: any,
  context: __SerdeContext
): ListTagsResponse => {
  let contents: any = {
    __type: "ListTagsResponse",
    NextToken: undefined,
    TagList: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.TagList !== undefined) {
    contents.TagList = deserializeAws_json1_1TagList(output.TagList, context);
  }
  return contents;
};

const deserializeAws_json1_1RestoreBackupResponse = (
  output: any,
  context: __SerdeContext
): RestoreBackupResponse => {
  let contents: any = {
    __type: "RestoreBackupResponse",
    Backup: undefined
  };
  if (output.Backup !== undefined) {
    contents.Backup = deserializeAws_json1_1Backup(output.Backup, context);
  }
  return contents;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  let contents: any = {
    __type: "TagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  let contents: any = {
    __type: "UntagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmAccessDeniedException = (
  output: any,
  context: __SerdeContext
): CloudHsmAccessDeniedException => {
  let contents: any = {
    __type: "CloudHsmAccessDeniedException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CloudHsmInternalFailureException = (
  output: any,
  context: __SerdeContext
): CloudHsmInternalFailureException => {
  let contents: any = {
    __type: "CloudHsmInternalFailureException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CloudHsmInvalidRequestException = (
  output: any,
  context: __SerdeContext
): CloudHsmInvalidRequestException => {
  let contents: any = {
    __type: "CloudHsmInvalidRequestException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CloudHsmResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): CloudHsmResourceNotFoundException => {
  let contents: any = {
    __type: "CloudHsmResourceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CloudHsmServiceException = (
  output: any,
  context: __SerdeContext
): CloudHsmServiceException => {
  let contents: any = {
    __type: "CloudHsmServiceException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
