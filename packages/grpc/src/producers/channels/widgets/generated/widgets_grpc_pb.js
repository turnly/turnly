// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var widgets_requests_pb = require('./widgets.requests_pb.js');
var widgets_responses_pb = require('./widgets.responses_pb.js');

function serialize_turnly_channels_v1_widgets_GetWidgetRequest(arg) {
  if (!(arg instanceof widgets_requests_pb.GetWidgetRequest)) {
    throw new Error('Expected argument of type turnly.channels.v1.widgets.GetWidgetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_widgets_GetWidgetRequest(buffer_arg) {
  return widgets_requests_pb.GetWidgetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_channels_v1_widgets_GetWidgetResponse(arg) {
  if (!(arg instanceof widgets_responses_pb.GetWidgetResponse)) {
    throw new Error('Expected argument of type turnly.channels.v1.widgets.GetWidgetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_channels_v1_widgets_GetWidgetResponse(buffer_arg) {
  return widgets_responses_pb.GetWidgetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WidgetsService = exports.WidgetsService = {
  getOne: {
    path: '/turnly.channels.v1.widgets.Widgets/GetOne',
    requestStream: false,
    responseStream: false,
    requestType: widgets_requests_pb.GetWidgetRequest,
    responseType: widgets_responses_pb.GetWidgetResponse,
    requestSerialize: serialize_turnly_channels_v1_widgets_GetWidgetRequest,
    requestDeserialize: deserialize_turnly_channels_v1_widgets_GetWidgetRequest,
    responseSerialize: serialize_turnly_channels_v1_widgets_GetWidgetResponse,
    responseDeserialize: deserialize_turnly_channels_v1_widgets_GetWidgetResponse,
  },
};

exports.WidgetsClient = grpc.makeGenericClientConstructor(WidgetsService);
