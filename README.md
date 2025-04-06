## Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [JDK 17](https://www.oracle.com/java/technologies/downloads/)
- [Android Studio](https://developer.android.com/studio) (for Android development)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development)
- [Watchman](https://facebook.github.io/watchman/) (macOS only)
- [React Native CLI](https://reactnative.dev/docs/environment-setup):  
  `npm install -g react-native-cli`

### FEATURES OF THE APP:
  - select various categories of new .
  - based on category get list of top-headlines.
  - read full article in web view.
  - search for article with keywords.
  - bookmark the artice for fututre reference.
  - select different countries to look for specfic country news. ( this free version only includes United State.):
  - in seach apply date filter till when from today the news to be fetched.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Mr-khan1100/Fresh-News.git
cd your-repo-name
```
### 2. Steps to run Project in android
** Install Dependencies**
run npm install

make changes in android/gradle.properties to set you java.home path.

run cammand -- cd android && ./gradlew clean && cd ..

npm run android

# Alternative manual build
cd android && ./gradlew assembleDebug


### 3. iOS Setup

Install CocoaPods
cd ios && pod install && cd ..

Open Xcode Project
open ios/YourProjectName.xcworkspace

iOS Release Build

In Xcode:

Select "Generic iOS Device" as target
Product > Archive
Follow distribution workflow

NOTE : In this project I have used and open source api of News Api of free version which has limited permission like number of request per day and date range filter where only 2 months worth of data can be fetched.

replace the api key in env folder with you own API key.



