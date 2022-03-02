<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="https://res.cloudinary.com/saif-freelance2/image/upload/v1646157938/Mapbox/Triplogo_rj9th0.png" alt="Logo" width="200" style="border-radius:2%" >
</p>

<h1 align="center">Trip Advice</h1>
<h3 align="center">
	<a href="https://map-box-app.vercel.app/" target="_blank">Live URL</a>
</h3>
  
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  </br>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#artefacts">Artefacts</a></li>
        <li><a href="#built-with">Tech Stack</a></li>
      </ul>
    </li>
    </br>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#tools-and-libraries">Tools And Libraries</a></li>
      </ul>
    </li>
  </ol>
</details>
 </br>

<!-- ABOUT THE PROJECT -->

## About The Project

 </br>

![Mock Prep Banner](https://res.cloudinary.com/saif-freelance2/image/upload/v1646140987/Mapbox/Untitled_picture_txpc7i.png)

This application allows user to view their trips on a map, & also view details related to each trip and destination.

### Artefacts

</br>
<a href="https://www.figma.com/file/eiQSo8pjwdcrvZiIaZtGU8/Travel-History-Tracker?node-id=0%3A1" target="_blank">Wireframes</a>
&nbsp;&nbsp;&nbsp;&nbsp;</br>
<a href="https://docs.google.com/document/d/1F2FI-MKdcNKXWWi9_VsAKOCzxPuKy9EhgH5f8AIzAIM/edit?usp=sharing" target="_blank" >Coding Practices</a>
</br>
</br>

**Features:**

  <ol>
    <li>  Intial Render to default coordinations 
    <ul><li>The initial map will be render with preset coordinates display zoomed out map view of US, this is done to keep a defalt map view in place</li></ul></br>
    </li>
    <li> Select Trip & Fly
    <ul><li>We have provided a one-click option that will take you to your desired trip on the map, along with relevant notes and timelines from your travel history.</li></ul></br>
    </li>
      <li> Dynamic Search for best experience
    <ul><li>Search for trips using the dynamic search feature, which filters out trips based on names that match, as well as error bounds.</li></ul></br>
    </li>
     <li>Filter Trips by travel type
    <ul><li>Filter trips by travel type using quick filter option, while handling errors for any missing data validations.</li>
    <li>The data for filter was dynamically imported from a json file.</li>
    </ul></br>
    <li>Sorting by name and date
    <ul><li>To find trips that suit your needs, sort your travels by name of date in ascending or descending order.</li>
    <li>The data for sort was dynamically imported from a json file,and not hardcoded.</li>
    </ul></br>
     <li>Dynamic Icon & zoom outs
    <ul><li>The specific list will be highlighted if you click on the map icon; there are also back and front buttons, as well as zoom out.</li>
    </ul></br>
     <li>Additional features for dynamic trip count & date calculation
    <ul><li>We have gone one step ahead in representing the details in best way possible.</li>
    <li>The trip count indicator represents count of trips displayed & trip start and end date displayed are calculated dynamically using momentjs
    </li>
    </ul></br>
    </li>
  </ol>

### Tech Stack

 </br>
<div align="center">
	<a href="https://reactjs.org/">
		<img src="https://res.cloudinary.com/emarat/image/upload/h_150/v1631867520/react-logo_aiqchy.png" title="React" height="100">
	</a>
	<a href="https://www.vercel.com/">
		<img src="https://image.pitchbook.com/hG77CP8UhJjUMH6f59hnUSo3p2V1608196200048_200x200" style="border-radius:2%"  title="Vercel" height="100">
  </a>
  	<a href="https://www.w3schools.com/">
		<img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" style="border-radius:2%"  title="HTML" height="100">
    </a>

</br>
	<a href="https://www.w3schools.com/">
		<img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" style="border-radius:2%"  title="CSS" height="100">
    </a>
	<a href="https://docs.mapbox.com/mapbox-gl-js/api/">
		<img src="https://docs.mapbox.com/help/demos/custom-markers-gl-js/mapbox-icon.png" style="border-radius:2%"  title="Mapbox Gl" height="100">
    </a>
    	<a href="https://storybook.js.org/">
		<img src="https://repository-images.githubusercontent.com/54173593/39e57000-a3fa-11e9-83c7-953827061607" style="border-radius:2%"  title="StoryBook" height="100">
    </a>
</div>

<!-- GETTING STARTED -->

## Getting Started

Following are the simple steps to run this project.

</br>

### Prerequisites

</br>

<a href="https://nodejs.org/en/download/" > Install Node</a>

<a href="https://git-scm.com/downloads" > Install git</a>

### Installation

1. Clone the repo

    ```sh
    git clone https://github.com/sraghudatta94/mapStory.git
    ```

2. Install NPM packages
    ```sh
    cd mapstory && npm install
    ```
3. Run
    ```sh
    npm start
    ```
4. Open

    ```sh
     http://localhost:3000 to view it in the browser
    ```

5. Run Test cases

    ```sh
     npm test
    ```

6. Run Story book

    ```sh
    yarn storybook
    ```

##

</br>
</br>

## Other Available Scripts

**Unit Testing**

We are testing our application with edge cases using jest and react testing library.

<!--Tools-->

##

</br>

## Tools and Libraries

-   [MapBox-GL] - Map Configuration
-   [Ant-Design] - Styled components
-   [typescript] - Static type checking
-   [Moment-js] - Dates
-   [Eslint] - Error check
-   [Story-Book] - Component library

##

</br>

## Mobile Responsive

-   Fits to Mobile Screen
-   Fits to Tab Screen
-   Fits to Desktop
