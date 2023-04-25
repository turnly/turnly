// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var tickets_requests_pb = require('./tickets.requests_pb.js');
var tickets_responses_pb = require('./tickets.responses_pb.js');

function serialize_turnly_queuing_system_v1_tickets_AnnounceMyArrivalRequest(arg) {
  if (!(arg instanceof tickets_requests_pb.AnnounceMyArrivalRequest)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.AnnounceMyArrivalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_AnnounceMyArrivalRequest(buffer_arg) {
  return tickets_requests_pb.AnnounceMyArrivalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_AnnounceMyArrivalResponse(arg) {
  if (!(arg instanceof tickets_responses_pb.AnnounceMyArrivalResponse)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.AnnounceMyArrivalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_AnnounceMyArrivalResponse(buffer_arg) {
  return tickets_responses_pb.AnnounceMyArrivalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_CallTicketToDeskRequest(arg) {
  if (!(arg instanceof tickets_requests_pb.CallTicketToDeskRequest)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.CallTicketToDeskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_CallTicketToDeskRequest(buffer_arg) {
  return tickets_requests_pb.CallTicketToDeskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_CallTicketToDeskResponse(arg) {
  if (!(arg instanceof tickets_responses_pb.CallTicketToDeskResponse)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.CallTicketToDeskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_CallTicketToDeskResponse(buffer_arg) {
  return tickets_responses_pb.CallTicketToDeskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_CreateTicketRequest(arg) {
  if (!(arg instanceof tickets_requests_pb.CreateTicketRequest)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.CreateTicketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_CreateTicketRequest(buffer_arg) {
  return tickets_requests_pb.CreateTicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_CreateTicketResponse(arg) {
  if (!(arg instanceof tickets_responses_pb.CreateTicketResponse)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.CreateTicketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_CreateTicketResponse(buffer_arg) {
  return tickets_responses_pb.CreateTicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_DiscardTicketRequest(arg) {
  if (!(arg instanceof tickets_requests_pb.DiscardTicketRequest)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.DiscardTicketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_DiscardTicketRequest(buffer_arg) {
  return tickets_requests_pb.DiscardTicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_DiscardTicketResponse(arg) {
  if (!(arg instanceof tickets_responses_pb.DiscardTicketResponse)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.DiscardTicketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_DiscardTicketResponse(buffer_arg) {
  return tickets_responses_pb.DiscardTicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_GetTicketDetailsRequest(arg) {
  if (!(arg instanceof tickets_requests_pb.GetTicketDetailsRequest)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.GetTicketDetailsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_GetTicketDetailsRequest(buffer_arg) {
  return tickets_requests_pb.GetTicketDetailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_GetTicketDetailsResponse(arg) {
  if (!(arg instanceof tickets_responses_pb.GetTicketDetailsResponse)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.GetTicketDetailsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_GetTicketDetailsResponse(buffer_arg) {
  return tickets_responses_pb.GetTicketDetailsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_GetTicketRequest(arg) {
  if (!(arg instanceof tickets_requests_pb.GetTicketRequest)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.GetTicketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_GetTicketRequest(buffer_arg) {
  return tickets_requests_pb.GetTicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_GetTicketResponse(arg) {
  if (!(arg instanceof tickets_responses_pb.GetTicketResponse)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.GetTicketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_GetTicketResponse(buffer_arg) {
  return tickets_responses_pb.GetTicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_GetTicketsBeforeYoursRequest(arg) {
  if (!(arg instanceof tickets_requests_pb.GetTicketsBeforeYoursRequest)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.GetTicketsBeforeYoursRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_GetTicketsBeforeYoursRequest(buffer_arg) {
  return tickets_requests_pb.GetTicketsBeforeYoursRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_GetTicketsBeforeYoursResponse(arg) {
  if (!(arg instanceof tickets_responses_pb.GetTicketsBeforeYoursResponse)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.GetTicketsBeforeYoursResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_GetTicketsBeforeYoursResponse(buffer_arg) {
  return tickets_responses_pb.GetTicketsBeforeYoursResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_GetTicketsForServingFromLocationRequest(arg) {
  if (!(arg instanceof tickets_requests_pb.GetTicketsForServingFromLocationRequest)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.GetTicketsForServingFromLocationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_GetTicketsForServingFromLocationRequest(buffer_arg) {
  return tickets_requests_pb.GetTicketsForServingFromLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_GetTicketsForServingFromLocationResponse(arg) {
  if (!(arg instanceof tickets_responses_pb.GetTicketsForServingFromLocationResponse)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.GetTicketsForServingFromLocationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_GetTicketsForServingFromLocationResponse(buffer_arg) {
  return tickets_responses_pb.GetTicketsForServingFromLocationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_GetTicketsWaitingForServiceRequest(arg) {
  if (!(arg instanceof tickets_requests_pb.GetTicketsWaitingForServiceRequest)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.GetTicketsWaitingForServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_GetTicketsWaitingForServiceRequest(buffer_arg) {
  return tickets_requests_pb.GetTicketsWaitingForServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_GetTicketsWaitingForServiceResponse(arg) {
  if (!(arg instanceof tickets_responses_pb.GetTicketsWaitingForServiceResponse)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.GetTicketsWaitingForServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_GetTicketsWaitingForServiceResponse(buffer_arg) {
  return tickets_responses_pb.GetTicketsWaitingForServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_LeaveTicketRequest(arg) {
  if (!(arg instanceof tickets_requests_pb.LeaveTicketRequest)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.LeaveTicketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_LeaveTicketRequest(buffer_arg) {
  return tickets_requests_pb.LeaveTicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_LeaveTicketResponse(arg) {
  if (!(arg instanceof tickets_responses_pb.LeaveTicketResponse)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.LeaveTicketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_LeaveTicketResponse(buffer_arg) {
  return tickets_responses_pb.LeaveTicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_ReturnToQueueRequest(arg) {
  if (!(arg instanceof tickets_requests_pb.ReturnToQueueRequest)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.ReturnToQueueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_ReturnToQueueRequest(buffer_arg) {
  return tickets_requests_pb.ReturnToQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_ReturnToQueueResponse(arg) {
  if (!(arg instanceof tickets_responses_pb.ReturnToQueueResponse)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.ReturnToQueueResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_ReturnToQueueResponse(buffer_arg) {
  return tickets_responses_pb.ReturnToQueueResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_ServeTicketRequest(arg) {
  if (!(arg instanceof tickets_requests_pb.ServeTicketRequest)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.ServeTicketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_ServeTicketRequest(buffer_arg) {
  return tickets_requests_pb.ServeTicketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_turnly_queuing_system_v1_tickets_ServeTicketResponse(arg) {
  if (!(arg instanceof tickets_responses_pb.ServeTicketResponse)) {
    throw new Error('Expected argument of type turnly.queuing_system.v1.tickets.ServeTicketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_turnly_queuing_system_v1_tickets_ServeTicketResponse(buffer_arg) {
  return tickets_responses_pb.ServeTicketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TicketsService = exports.TicketsService = {
  create: {
    path: '/turnly.queuing_system.v1.tickets.Tickets/Create',
    requestStream: false,
    responseStream: false,
    requestType: tickets_requests_pb.CreateTicketRequest,
    responseType: tickets_responses_pb.CreateTicketResponse,
    requestSerialize: serialize_turnly_queuing_system_v1_tickets_CreateTicketRequest,
    requestDeserialize: deserialize_turnly_queuing_system_v1_tickets_CreateTicketRequest,
    responseSerialize: serialize_turnly_queuing_system_v1_tickets_CreateTicketResponse,
    responseDeserialize: deserialize_turnly_queuing_system_v1_tickets_CreateTicketResponse,
  },
  getOne: {
    path: '/turnly.queuing_system.v1.tickets.Tickets/GetOne',
    requestStream: false,
    responseStream: false,
    requestType: tickets_requests_pb.GetTicketRequest,
    responseType: tickets_responses_pb.GetTicketResponse,
    requestSerialize: serialize_turnly_queuing_system_v1_tickets_GetTicketRequest,
    requestDeserialize: deserialize_turnly_queuing_system_v1_tickets_GetTicketRequest,
    responseSerialize: serialize_turnly_queuing_system_v1_tickets_GetTicketResponse,
    responseDeserialize: deserialize_turnly_queuing_system_v1_tickets_GetTicketResponse,
  },
  getDetails: {
    path: '/turnly.queuing_system.v1.tickets.Tickets/GetDetails',
    requestStream: false,
    responseStream: false,
    requestType: tickets_requests_pb.GetTicketDetailsRequest,
    responseType: tickets_responses_pb.GetTicketDetailsResponse,
    requestSerialize: serialize_turnly_queuing_system_v1_tickets_GetTicketDetailsRequest,
    requestDeserialize: deserialize_turnly_queuing_system_v1_tickets_GetTicketDetailsRequest,
    responseSerialize: serialize_turnly_queuing_system_v1_tickets_GetTicketDetailsResponse,
    responseDeserialize: deserialize_turnly_queuing_system_v1_tickets_GetTicketDetailsResponse,
  },
  leave: {
    path: '/turnly.queuing_system.v1.tickets.Tickets/Leave',
    requestStream: false,
    responseStream: false,
    requestType: tickets_requests_pb.LeaveTicketRequest,
    responseType: tickets_responses_pb.LeaveTicketResponse,
    requestSerialize: serialize_turnly_queuing_system_v1_tickets_LeaveTicketRequest,
    requestDeserialize: deserialize_turnly_queuing_system_v1_tickets_LeaveTicketRequest,
    responseSerialize: serialize_turnly_queuing_system_v1_tickets_LeaveTicketResponse,
    responseDeserialize: deserialize_turnly_queuing_system_v1_tickets_LeaveTicketResponse,
  },
  announce: {
    path: '/turnly.queuing_system.v1.tickets.Tickets/Announce',
    requestStream: false,
    responseStream: false,
    requestType: tickets_requests_pb.AnnounceMyArrivalRequest,
    responseType: tickets_responses_pb.AnnounceMyArrivalResponse,
    requestSerialize: serialize_turnly_queuing_system_v1_tickets_AnnounceMyArrivalRequest,
    requestDeserialize: deserialize_turnly_queuing_system_v1_tickets_AnnounceMyArrivalRequest,
    responseSerialize: serialize_turnly_queuing_system_v1_tickets_AnnounceMyArrivalResponse,
    responseDeserialize: deserialize_turnly_queuing_system_v1_tickets_AnnounceMyArrivalResponse,
  },
  call: {
    path: '/turnly.queuing_system.v1.tickets.Tickets/Call',
    requestStream: false,
    responseStream: false,
    requestType: tickets_requests_pb.CallTicketToDeskRequest,
    responseType: tickets_responses_pb.CallTicketToDeskResponse,
    requestSerialize: serialize_turnly_queuing_system_v1_tickets_CallTicketToDeskRequest,
    requestDeserialize: deserialize_turnly_queuing_system_v1_tickets_CallTicketToDeskRequest,
    responseSerialize: serialize_turnly_queuing_system_v1_tickets_CallTicketToDeskResponse,
    responseDeserialize: deserialize_turnly_queuing_system_v1_tickets_CallTicketToDeskResponse,
  },
  getTicketsBeforeYours: {
    path: '/turnly.queuing_system.v1.tickets.Tickets/GetTicketsBeforeYours',
    requestStream: false,
    responseStream: false,
    requestType: tickets_requests_pb.GetTicketsBeforeYoursRequest,
    responseType: tickets_responses_pb.GetTicketsBeforeYoursResponse,
    requestSerialize: serialize_turnly_queuing_system_v1_tickets_GetTicketsBeforeYoursRequest,
    requestDeserialize: deserialize_turnly_queuing_system_v1_tickets_GetTicketsBeforeYoursRequest,
    responseSerialize: serialize_turnly_queuing_system_v1_tickets_GetTicketsBeforeYoursResponse,
    responseDeserialize: deserialize_turnly_queuing_system_v1_tickets_GetTicketsBeforeYoursResponse,
  },
  getTicketsWaitingForService: {
    path: '/turnly.queuing_system.v1.tickets.Tickets/GetTicketsWaitingForService',
    requestStream: false,
    responseStream: false,
    requestType: tickets_requests_pb.GetTicketsWaitingForServiceRequest,
    responseType: tickets_responses_pb.GetTicketsWaitingForServiceResponse,
    requestSerialize: serialize_turnly_queuing_system_v1_tickets_GetTicketsWaitingForServiceRequest,
    requestDeserialize: deserialize_turnly_queuing_system_v1_tickets_GetTicketsWaitingForServiceRequest,
    responseSerialize: serialize_turnly_queuing_system_v1_tickets_GetTicketsWaitingForServiceResponse,
    responseDeserialize: deserialize_turnly_queuing_system_v1_tickets_GetTicketsWaitingForServiceResponse,
  },
  getTicketsForServingFromLocation: {
    path: '/turnly.queuing_system.v1.tickets.Tickets/GetTicketsForServingFromLocation',
    requestStream: false,
    responseStream: false,
    requestType: tickets_requests_pb.GetTicketsForServingFromLocationRequest,
    responseType: tickets_responses_pb.GetTicketsForServingFromLocationResponse,
    requestSerialize: serialize_turnly_queuing_system_v1_tickets_GetTicketsForServingFromLocationRequest,
    requestDeserialize: deserialize_turnly_queuing_system_v1_tickets_GetTicketsForServingFromLocationRequest,
    responseSerialize: serialize_turnly_queuing_system_v1_tickets_GetTicketsForServingFromLocationResponse,
    responseDeserialize: deserialize_turnly_queuing_system_v1_tickets_GetTicketsForServingFromLocationResponse,
  },
  serve: {
    path: '/turnly.queuing_system.v1.tickets.Tickets/Serve',
    requestStream: false,
    responseStream: false,
    requestType: tickets_requests_pb.ServeTicketRequest,
    responseType: tickets_responses_pb.ServeTicketResponse,
    requestSerialize: serialize_turnly_queuing_system_v1_tickets_ServeTicketRequest,
    requestDeserialize: deserialize_turnly_queuing_system_v1_tickets_ServeTicketRequest,
    responseSerialize: serialize_turnly_queuing_system_v1_tickets_ServeTicketResponse,
    responseDeserialize: deserialize_turnly_queuing_system_v1_tickets_ServeTicketResponse,
  },
  discard: {
    path: '/turnly.queuing_system.v1.tickets.Tickets/Discard',
    requestStream: false,
    responseStream: false,
    requestType: tickets_requests_pb.DiscardTicketRequest,
    responseType: tickets_responses_pb.DiscardTicketResponse,
    requestSerialize: serialize_turnly_queuing_system_v1_tickets_DiscardTicketRequest,
    requestDeserialize: deserialize_turnly_queuing_system_v1_tickets_DiscardTicketRequest,
    responseSerialize: serialize_turnly_queuing_system_v1_tickets_DiscardTicketResponse,
    responseDeserialize: deserialize_turnly_queuing_system_v1_tickets_DiscardTicketResponse,
  },
  returnToQueue: {
    path: '/turnly.queuing_system.v1.tickets.Tickets/ReturnToQueue',
    requestStream: false,
    responseStream: false,
    requestType: tickets_requests_pb.ReturnToQueueRequest,
    responseType: tickets_responses_pb.ReturnToQueueResponse,
    requestSerialize: serialize_turnly_queuing_system_v1_tickets_ReturnToQueueRequest,
    requestDeserialize: deserialize_turnly_queuing_system_v1_tickets_ReturnToQueueRequest,
    responseSerialize: serialize_turnly_queuing_system_v1_tickets_ReturnToQueueResponse,
    responseDeserialize: deserialize_turnly_queuing_system_v1_tickets_ReturnToQueueResponse,
  },
};

exports.TicketsClient = grpc.makeGenericClientConstructor(TicketsService);
