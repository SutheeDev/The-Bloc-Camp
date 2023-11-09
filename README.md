# The Bloc Camp

![The Bloc Camp Landing Page](https://res.cloudinary.com/dnc7potxo/image/upload/v1699557326/ReadMe-Images/The%20Bloc%20Camp/Images/Bloc_Camp_forf30.png)
<br><br>

Welcome to [The Bloc Camp](https://the-bloc-camp.onrender.com/), a project that showcases my development skills through a dynamic website and a feature-packed application designed for The Bloc Camp, the Bay area's premiere live music venue, providing an excellent space for hosting events and concerts and delivering an exceptional musical experience for music lovers. <br><br>

## Table of Contents

- [Website](#website)
  - [Home](#home)
  - [Shows](#shows)
  - [About](#about)
  - [Contact](#contact)
  - [Additional Pages](#additional_pages)
- [Common Elements](#common_elements)
- [Application](#application)
  - [User Dashboard](#user_dashboard)
  - [Admin Dashboard](#admin_dashboard)
- [Demo Dashboard](#demo_dashboard)
- [Technologies Used](#technologies)
- [Feedback](#feedback) <br><br>

## Features

This project consists of two main parts: the [website](#website) and the [application](#application). <br><br>

## Website <a name="website"></a>

The Bloc Camp website offers a range of features to enhance the user experience. It is where the venue showcases its forthcoming shows, displays event information, provides details of the artists, sells the tickets, and supplies the venue's regulations and contact info. There are four main pages the user can visit on The Bloc Camp website:

- [Home](#home)
- [Shows](#shows)
- [About](#about)
- [Contact](#contact)

### Home <a name="home"></a>

![Home Page](https://res.cloudinary.com/dnc7potxo/image/upload/v1699556857/ReadMe-Images/The%20Bloc%20Camp/GIF/Home%20Page.gif)

- The Home page offers a beautiful dynamic slideshow showcasing featured artists and event information such as date, time, and button navigation to the Shows page.
- The interactive slideshow allows users to click and drag to view featured artists.
- Display of venue rules and regulations.
- Exhibit of upcoming events with a "Get Tickets" button for more details.

### Shows <a name="shows"></a>

![Shows Page](https://res.cloudinary.com/dnc7potxo/image/upload/v1699557330/ReadMe-Images/The%20Bloc%20Camp/Images/Shows_Page_julft5.png)

- The Shows page provides detailed artist information, including images, performance dates, and descriptions.
- A button on each show leads to an individual [Artist](#artist) page.

### About <a name="about"></a>

![About Page](https://res.cloudinary.com/dnc7potxo/image/upload/v1699557323/ReadMe-Images/The%20Bloc%20Camp/Images/About_Page_uuedxw.png)

- The About page is where the message from the venue can be found.
- Also provides insights into the venue's principles.

### Contact <a name="contact"></a>

![Contact Page](https://res.cloudinary.com/dnc7potxo/image/upload/v1699557327/ReadMe-Images/The%20Bloc%20Camp/Images/Contact_Page_c4m8jy.png)

- The Contact page offers the venue address, Google Maps with directions, phone number, and email for easy contact. <br><br>

### Additional Pages <a name="additional_pages"></a>

Apart from the four main pages, there are some additional pages users may occasionally encounter, which are:

### Artist <a name="artist"></a>

![Artist Page](https://res.cloudinary.com/dnc7potxo/image/upload/v1699557325/ReadMe-Images/The%20Bloc%20Camp/Images/Artist_Page1_gtiser.png)

- The Artist page is dedicated to each individual artist.
- All information about the event can be found, including the artist's name, artist description, image, event date, time, and ticket price.

![Artist Page with a function to calculate a total price](https://res.cloudinary.com/dnc7potxo/image/upload/v1699557326/ReadMe-Images/The%20Bloc%20Camp/Images/Artist_Page2_utuckd.png)

- A function to calculate total ticket cost.
- Although the 'Checkout' button is currently disabled, it provides a glimpse of the site's future capabilities.

### Error

![Error 404 Page](https://res.cloudinary.com/dnc7potxo/image/upload/v1699557324/ReadMe-Images/The%20Bloc%20Camp/Images/404_s4imcy.png)

- Suppose users attempt to access a non-existent page on the website; they are gracefully redirected to the Error page.
- Equipped with a Home button for easy navigation. <br><br>

## Common Elements <a name="common_elements"></a>

In addition to those pages described above, the website maintains consistent elements across all pages. Essential elements – the logo, navbar, social-media links, and footer, where a call to subscription is located – are displayed on every page.

### Navbar

![Navbar on big screen](https://res.cloudinary.com/dnc7potxo/image/upload/v1699557329/ReadMe-Images/The%20Bloc%20Camp/Images/Navbar_l9m8su.png)

- Remains conveniently visible, ensuring easy navigation without the need to scroll to the top.

![Navbar on small screen](https://res.cloudinary.com/dnc7potxo/image/upload/v1699557328/ReadMe-Images/The%20Bloc%20Camp/Images/Navbar_Small_il9cgr.png)

- Responsive design for mobile and desktop screens.

### The social-media links

![Social-media links attached to the left of the page](https://res.cloudinary.com/dnc7potxo/image/upload/v1699559857/ReadMe-Images/The%20Bloc%20Camp/Images/Social_Side_v8htfa.png)

- Visibly attached to the left, providing effortless accessibility.

![Social-media links fixed under the page logo](https://res.cloudinary.com/dnc7potxo/image/upload/v1699557331/ReadMe-Images/The%20Bloc%20Camp/Images/Social_Small_o8scuf.png)

- The links shift beneath the logo on smaller screens, ensuring accessibility without wasting screen real estate.

### Subscription

![Subscribe form](https://res.cloudinary.com/dnc7potxo/image/upload/v1699557332/ReadMe-Images/The%20Bloc%20Camp/Images/Subscribe_elnz05.png)

- The subscription form is available for users to input email addresses.
- Equipped with a validator checking whether the input is an email and provides an error message if it is not.
- A thank you note will be sent to the user's email in case of a successful subscription. <br><br>

## Application <a name="application"></a>

![Application](https://res.cloudinary.com/dnc7potxo/image/upload/v1699557324/ReadMe-Images/The%20Bloc%20Camp/Images/Application_twllsl.png)

The second part of this project is the application, which extends the user experience by offering additional functionalities through a dashboard divided into two separate classes: the [User Dashboard](#user_dashboard) and the [Admin Dashboard](#admin_dashboard). The dashboard is only accessible through the Register / Login page.

### Register / Login

![Login](https://res.cloudinary.com/dnc7potxo/image/upload/v1699558417/ReadMe-Images/The%20Bloc%20Camp/GIF/Login_eqinmm.gif)

- The Register / Login page provides user-friendly forms for registration and login.
- Users can either log in with their existing credentials or switch to the Register page to create a new account.
- Email address and password are required for login, while Name input is additionally requested on the registration form.
- Robust form validation to ensure accurate and complete information entry.
- Upon successful login or registration, users receive a friendly success message and are seamlessly redirected to their respective dashboards.
- Users and admins will be navigated to a different dashboard. However, a new registerer will be automatically initialized as a general user.
- The links to explore the [User Demo](#user_demo) and [Admin Demo](#admin_demo) are also provided on the login form.

### Dashboard

The user and admin dashboard share some standard functionalities, such as a dashboard sidebar and a dropdown menu.

#### Dashboard Sidebar

![Close and open sidebar on a big screen](https://res.cloudinary.com/dnc7potxo/image/upload/v1699558419/ReadMe-Images/The%20Bloc%20Camp/GIF/Sidebar_close_open_ryq402.gif)

- A key navigation component on the left side of the application's interface offers convenient access to different sub-pages.
- Automatically displayed for quick navigation on larger screens.
- Automatically hidden to save space, ensuring a better user experience.

![Open and openclose sidebar on a small screen](https://res.cloudinary.com/dnc7potxo/image/upload/v1699558420/ReadMe-Images/The%20Bloc%20Camp/GIF/Sidebar_open_close_a9h4gr.gif)

- When hidden, it is transformed into a floating modal menu.
- Could be manually toggled to be visible or hidden using the hamburger menu on the header's top left.

#### Dropdown Menu & User Icon

![Dropdown menu access](https://res.cloudinary.com/dnc7potxo/image/upload/v1699558416/ReadMe-Images/The%20Bloc%20Camp/GIF/Dropdown_Menu_hhkiri.gif)

- The user icon on the top right indicates an individual user name, providing a personalized touch to the interface.
- Hovering over the user's name opens a dropdown menu with links to various pages, mirroring the functionality of the sidebar.
- The dropdown menu includes a Logout link to securely log out and redirect the user to the Register / Login page. <br><br>

## User Dashboard <a name="user_dashboard"></a>

The user dashboard is where the user view and update their profile, manage favorite shows, and discover upcoming events. It contains four sub-pages: Overview, Favorites, Upcoming, and Profile.

### Overview (User)

![User Overview](https://res.cloudinary.com/dnc7potxo/image/upload/v1699557333/ReadMe-Images/The%20Bloc%20Camp/Images/User_Overview_mgetlw.png)

- The overview is the first page users encounter upon entering the dashboard.
- Users are greeted by their username, creating a personalized experience from the start.
- A Quick Tips section offers quick access links for essential actions, for example, updating user profile and managing favorite shows.

### Favorites <a name="favorites"></a>

![Favorite page](https://res.cloudinary.com/dnc7potxo/image/upload/v1699557333/ReadMe-Images/The%20Bloc%20Camp/Images/User_Favorite_yi3x3u.png)

- Displays all shows and events users mark as favorites in one convenient location.
- Ability to easily remove a show from the favorites list with a simple click.

### Upcoming <a name="upcoming"></a>

- Display of all upcoming shows, categorized by the venue admin.
- Basic show information, including the artist's name, image, performance date, and time, is readily available.
- Expandable show containers with additional details such as show status, ticket price, and artist's description.

![Filter on the Upcoming page](https://res.cloudinary.com/dnc7potxo/image/upload/v1699558420/ReadMe-Images/The%20Bloc%20Camp/GIF/Filter_jr4d0i.gif)

- User-friendly search functionality at the top, allowing for show filtering and sorting.
  - Sorting options include By Date, Reverse Date, A-Z, and Z-A.
  - Loading spinner displayed during a search for timely results.
- Page navigation buttons, situated at the end of the page, for browsing multiple shows.
  - While on the first page, the Prev button takes users to the last page.
  - While on the last page, the Next button loops users back to the first page.
  - Page Number buttons for easy access to specific pages, enhancing user convenience.

### Profile

- The Profile page lets users easily update and manage account information from one location.
- Four editable input fields for user customization:
  - Name
  - Last Name
  - Email
  - Location
- Mandatory completion of all fields to successfully update the profile.
- Error message displayed if any required information is missing or incomplete.
- Confirmation message is shown upon successful update after clicking the update button. <br><br>

## Admin Dashboard <a name="admin_dashboard"></a>

The Admin Dashboard is exclusively accessible to assigned application administrators. It is the central hub for managing the music venue's operations. It consists of four sub-pages: Overview, All Shows, Create Show, and Profile page.

### Overview (Admin) <a name="overview_admin"></a>

- A comprehensive overview of the venue's performance.
- Displays the total number of shows categorized by status (Upcoming, Canceled, and Sold Out) at the top.
- Monthly show chart visualizing venue performance in a six-month period with bar and area charts.

### All Shows <a name="all_shows"></a>

- Provides administrators with a complete listing of all types of shows and events for easy management.
- Shows the total number of shows for quick reference.
- Basic show information, including the artist's name, performance date, and time, is immediately visible.
- Expandable show containers with additional details, such as show status, ticket price, and artist's description.
- Edit button allows administrators to update information for specific shows, leading to the Edit Show page.
- No standalone "Edit Show" link on the sidebar or dropdown menu; it appears dynamically only when the admin is on the Edit Show page to avoid confusion.
- Delete button allows administrators to remove events from the database.
- Please refer to the [Create Show](#create_show) page for a comprehensive form input guide on the Edit Show.

### Create Show <a name="create_show"></a>

The Create Show page provides a comprehensive set of form inputs for administrators to construct an event. These fields include:

1. Artist
   - Specify the name of the artist, band, event, or show.
   - This field is required; an error message will display if omitted.
2. Artist Info
   - Where the admin describes the artist, provides a backstory, shares information about the show, or highlights exciting details.
   - Limited to 400 characters, an error message will be displayed if the character limit is exceeded.
3. Ticket Price
   - Specify the ticket price.
4. Status
   - A dropdown menu where the admin chooses between upcoming, canceled, and soldout.
   - Each selected status appears on the [All Shows](#all_shows) page and is color-coded differently for easy identification.
   - Total number of all shows statuses is reflected on the [Overview](#overview_admin) page.
   - This field is required; an error message will appear if not specified.
5. Show Date
   - Specify the event date using a calendar provided
   - Accepts formats of "mm/dd/yy" or "mm/dd/yyyy" for manual input.
   - This is a required field; an error message will display if omitted.
6. Start Time
   - Specify the show's start time in "hh:mm PM" format.
   - Manual input is available, but choosing from predefined time slots – every 15 minutes from 12:00 PM to 22:30 PM – is recommended for precision.
   - This is a required field; an error message will appear if omitted.
7. Thumbnail Image
   - Allow uploading an image up to 3 MB to serve as the artist's thumbnail.
   - An error message is displayed if exceeds the maximum file size or uploads a non-image file type.
   - Automatically crops, resizes, and converts the image to a square format of 426px x 426px for uniform presentation.
   - Default image provided if no upload is made.
   - Artist's thumbnails appear on the [Shows](#shows) page.
8. Featured Image
   - Similar functionalities to Thumbnail Image, allowing image uploads up to 3 MB.
   - Automatically crops, resizes, and converts the image to a rectangle format of 640px x 360px.
   - Used in various places on the front-end and dashboard, including [Favorites](#favorites) and [Upcoming](#upcoming) on the [User Dashboard](#user_dashboard), [All Shows](#all_shows) on the [Admin Dashboard](#admin_dashboard), and [Artist](#artist) page on the front-end.
   - Featured image of a [featured show](#featured_show) is included on the slideshow displayed on the [Home](#home) page.
9. Publish On Site?
   - Toggle switch to decide whether the show should appear on the site
   - With this switch ON, the show is exhibited on Home and Shows Pages.
   - Useful for hiding incomplete or future shows from site visitors.
   - Published status is displayed on each show on the dashboard.
10. Featured Show? <a name="featured_show"></a>
    - Toggle switch to set the show as a featured show, displayed in the slideshow on the Home Page.
    - Promote selected shows or concerts effectively.
    - Featured status is also displayed on each show on the dashboard.
11. Save Changes Button
    - Compiles and saves all show information to the database, displaying a success message.
    - Resets all form inputs to their default settings, ready to create a new show.
12. Clear All Button
    - Resets all form inputs to their default setup.

Admin can immediately view the results of a newly created show by navigating to the All Shows page.

### Profile

- The Profile page allows admins to update and manage account information conveniently.
- Includes four editable input fields:
  - Name
  - Last Name
  - Email
  - Location
- Mandatory completion of all fields to successfully update the profile.
- Error message displayed if any required information is missing or incomplete.
- Confirmation message is shown upon successful update after clicking the update button. <br><br>

## Demo Dashboard <a name="demo_dashboard"></a>

The demo function exhibits the application's possibilities and allows visitors to explore dashboard capabilities without registering or signing in.

### User Demo <a name="user_demo"></a>

- Delivers identical design and layout as the User Dashboard.
- Offered read-only mode; allows users to examine essential functionalities with some limited access.
  - Adding or removing the favorite shows to the list on the Favorite and Upcoming pages and updating information on the Profile page are not permitted.

### Admin Demo <a name="admin_demo"></a>

- Provides a similar structure and layout as the Admin Dashboard.
- Offered read-only mode; allows admins to explore basic functionalities with some restricted behaviors.
  - Deleting the shows is not authorized on the All Shows page.
  - Uploading Thumbnail Image and Featured Image functionalities on Edit Show and Create Show pages are intentionally restricted.
  - Save Changes button is not operable on the Edit Show and Create Show pages.
  - Updating information on the Profile page is also not permitted. <br><br>

## Technologies Used <a name="technologies"></a>

The Bloc Camp website and application were created using various technologies to ensure a smooth and practical user experience. Here are some technologies I incorporated into this project. <br><br>

| **Frontend**     | **Backend**          | **Security**           | **Utility**   | **Database** | **Deployment** |
| :--------------- | :------------------- | :--------------------- | :------------ | :----------- | :------------- |
| React            | NodeJS               | jsonwebtoken           | Axios         | MongoDB      | Render.com     |
| Style-components | Express              | BcryptJS               | MomentJS      | Cloudinary   |                |
| SwiperJS         | Mongoose             | jsonwebtoken           | Dotenv        |              |                |
| Recharts         | Morgan               | express-mongo-sanitize | ValidatorJS   |              |                |
| normalize.css    | http-status-codes    | xss-clean              | Concurrently  |              |                |
| react-router-dom | express-async-errors | express-rate-limit     | cookie-parser |              |                |
| react-icons      | express-fileupload   |                        | Browserslist  |              |                |
| antd             |                      |                        |               |              |                |
| date-fns         |                      |                        |               |              |                |

<br><br>

## Feedback <a name="feedback"></a>

Feedback to improve The Bloc Camp project is welcome. If you have any suggestions or would like to collaborate, please get in touch with me on GitHub. Thanks!
