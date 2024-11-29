<h1 style="font-size: 30px;">Analytics Dashboard</h1>
<p>A React dashboard application built with TypeScript and Tailwind CSS, providing user authentication and interactive analytics.</p>

<h2 style="font-size: 24px;">Features</h2>
<ul>
  <li><strong>User Authentication:</strong> Secure login to access the dashboard.</li>
  <li><strong>Responsive Design:</strong> Optimized for devices of all sizes.</li>
  <li><strong>Data Visualization:</strong> Interactive charts and graphs using Recharts.</li>
</ul>

<h2 style="font-size: 24px;">Demo</h2>
<ul>
  <li><strong>Live Deployment:</strong> [Rainforest Analytics Dashboard](https://rainforestanalytics.netlify.app)</li>
  <li><strong>GitHub Repository:</strong> [Analytics Dashboard Repository](https://github.com/Myches/AnalyticsDashboard.git)</li>
</ul>

<h2 style="font-size: 24px;">Run the Project Locally</h2>
<h3 style="font-size: 20px;">Prerequisites</h3>
<ul>
  <li>Node.js (v16 or later)</li>
  <li>npm or yarn package manager</li>
</ul>

<h3 style="font-size: 20px;">Steps to Run</h3>
<pre>
git clone https://github.com/Myches/AnalyticsDashboard.git
cd AnalyticsDashboard
npm install
# or
yarn install
npm run dev
# or
yarn run dev
</pre>

<h2 style="font-size: 24px;">Deployment</h2>
<p>The application is deployed on Netlify using the "Import from GitHub" feature. Follow the steps below to replicate the deployment process:</p>
<ol>
  <li><strong>Log in to Netlify:</strong> Go to <a href="https://www.netlify.com/">Netlify</a> and log in.</li>
  <li><strong>Import Repository:</strong> Click on "Add New Site" > "Import an Existing Project" and connect your GitHub account.</li>
  <li><strong>Select Repository:</strong> Choose AnalyticsDashboard from the list of repositories.</li>
  <li><strong>Build Settings:</strong>
    <ul>
      <li>Build command: npm run build</li>
      <li>Publish directory: dist (or build depending on your bundler setup)</li>
    </ul>
  </li>
  <li><strong>Deploy:</strong> Click "Deploy Site," and Netlify will automatically build and host the application.</li>
</ol>

<h2 style="font-size: 24px;">Project Organization</h2>
<p>The project is structured into directories for easy navigation and scalability:</p>
<ul>
  <li><strong>public/</strong>: Static assets, including the app's favicon and images.</li>
  <li><strong>src/</strong>: Main application code, including:
    <ul>
      <li><strong>components/</strong>: Reusable UI elements like Sidebar, LoadingSpinner, ChartData, etc.</li>
      <li><strong>pages/</strong>: Views corresponding to app routes (e.g., Dashboard, Login).</li>
      <li><strong>hooks/</strong>: Custom React hooks for reusable fetching logic (e.g., API fetching).</li>
      <li><strong>layouts/</strong>: Shared layouts for pages (e.g., main layout).</li>
      <li><strong>api/</strong>: API calls and business logic (e.g., authentication service).</li>
      <li><strong>types/</strong>: TypeScript definitions for consistent data modeling.</li>
    </ul>
  </li>
</ul>

<h2 style="font-size: 24px;">Key Technologies</h2>
<ul>
  <li>React.js</li>
  <li>TypeScript</li>
  <li>Axios</li>
  <li>React Icons</li>
  <li>Recharts (for charts and graphs)</li>
  <li>Tailwind CSS</li>
  <li>React Router DOM (for routing)</li>
  <li>React Hook Form (for form validation)</li>
  <li>React Loader Spinner (for loading states)</li>
  <li>Jest (for unit testing)</li>
</ul>
