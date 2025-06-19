# back4app-full-stack

This repository demonstrates how to deploy a full-stack blog app to [Back4app](https://www.back4app.com/).

1. Backend is created using [Back4app (BaaS)](https://www.back4app.com/).
2. Frontend is created using [Next.js](https://nextjs.org/) and deployed to [Back4app Containers (CaaS)](https://www.back4app.com/container-as-a-service-caas).
3. Frontend and backend are connected via [Parse SDK](https://parseplatform.org/).

To learn more check out the [article](https://blog.back4app.com/how-to-host-frontend-and-backend/).

## Backend

All the required information is provided in the [article](https://blog.back4app.com/how-to-host-frontend-and-backend/).

## Frontend

### Development

1. Install the dependencies via NPM.

    ```bash
   $ npm install
   ```

2. Create the *.env.local* environmental variables file:

    ```bash
   NEXT_PUBLIC_PARSE_APPLICATION_ID=<parse_app_id>
   NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY=<parse_javascript_key>
   ```

   > Make sure to replace `<parse_app_id>` and `<parse_javascript_key>` with your actual ID and key. To obtain your credentials navigate to your Back4app app and select "App Settings > Security & Keys" in the sidebar.

3. Run the Next development server.

    ```bash
   $ npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your favorite web browser.

### Deployment

All the required information is provided in the [article](https://blog.back4app.com/how-to-host-frontend-and-backend/).

