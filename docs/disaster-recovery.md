# Maverick — What about Disaster Recovery?

Hopefully, this goes without saying, enterprise customers tend to view much of their software
as "critical" and will want to know that it has a reliable history of uptime and systems installed
for disaster recovery. That is why one of the main concerns is;
**What are we doing to handle downtime or error handling?**

This document is a short, technical version for members who interact with the systems.

#### Error handling and monitoring

We did a great job handling and catching any bugs in the app, however, this doesn't
prevent something unexpected from happening, but it will help you be prepared
and have a way to find a solution quickly.

Application errors are handled with the concept of Domain Exception and should
not be a cause for concern, however critical and unexpected errors will be handled by our
system that is responsible for creating logs, notifying the monitoring team in Slack and
sending the error to Sentry with all the necessary data to match the error to a request ID.

All requests have a unique identifier that helps track errors in the same transaction.

Data write requests are handled with transactions to avoid data inconsistencies
if an error occurs within the same transaction.

Sentry and Slack will be your source for monitoring to guide you in troubleshooting your systems.

#### Motivation

The reason for having a plan and great error handling begins to be described at the beginning
of this document, with the concern of having multiple companies in our systems. When you have
a multi-tenant application, you may have a lot of responsibility on your shoulders for those
companies and you must chart the path to solve the problems or disasters in the system.

We must assure these companies that we are in control of what happens in our systems and
that we have a way to go when it comes to disasters that are inevitable
in the world of cloud technology and systems.
