# FAQ

#### Why microservices and complex architecture for a project that is just starting?

Rather than figuring out if Turnly is a great project, our approach is to
practice and learn, we are enthusiasts of organized code and have rarely had
the opportunity to do things slowly and elegantly. So instead of just taking a
repository and doing boring practice for separate concepts, we decided to take
an idea and bring it to life using all the things we thought fit to learn.

Although it is a new project, we decided to start with microservices to learn about
this and its complications. We take a very serious approach, but our profit from
learning comes first, and microservices are a topic of great interest to us.

Until now, the things we have adopted have kept the spirit
of further developing this product alive.

Other things also play a role, like the ability to iterate without
other parts of the system, but more on that later.

#### Why don't you use Nest.js?

Nest.ts is a great framework but for our liking, it has a very strong structure
and the architecture we chose differs from certain things in Nest.js.

But don't be surprised if we use it in some service.

#### Why not use lerna or turbo?

When we started the project it was closed and we have no plans to release packages
from the monorepo to npm, so we use `yarn workspaces` because it works well for us.
