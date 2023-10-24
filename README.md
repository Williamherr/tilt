## https://tilt-five.vercel.app/

Tilt is a thread copycat app built with Next.js, Clerk Auth, MongoDB, Shadcn-UI, Tailwind, and Uploadthing.

## Getting Started

To get started with Tilt, clone the repository and install the dependencies:

## git clone https://github.com/Williamherr/tilt

cd tilt
npm install

Then, create a .env.local file in the root directory of the project and add the following environment variables:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=...
NEXT_PUBLIC_CLERK_SIGN_UP_URL=...
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=...
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=...
MONGODB_URL=...
UPLOADTHING_SECRET=...
UPLOADTHING_APP_ID=...
NEXT_CLERK_WEBHOOK_SECRET=...

# Features

- User authentication with Clerk Auth
- Thread creation and deletion
- Thread commenting
- Image uploading with Uploadthing

# Technologies Used

- Next.js
- Clerk Auth
- MongoDB
- Shadcn-UI
- Tailwind
- Uploadthing

# TODO:

- Add like mechanicism
- Add request to be added to a community
- Add share mechanicism
- Add activities notifications
- Fix Profile tabs: Replies and Tagged
