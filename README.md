# 2xSpeed - Video Playback Speed Controller

A simple Chrome extension that lets you control video playback speed with a draggable slider. Adjust any video's speed from 0.25x to 4x with ease!

## Features

- 🎚️ **Draggable Slider**: Easy-to-use range slider for speed control
- ⚡ **Wide Range**: Supports playback speeds from 0.25x to 4x
- 🎯 **Real-time Display**: Shows the current speed value as you adjust
- 🌐 **Works Everywhere**: Compatible with any website with video elements (YouTube, Vimeo, Netflix, etc.)

## Installation

### Step 1: Download or Clone
Clone the repository to your local machine.

### Step 2: Enable Developer Mode
1. Open **Chrome** (or any Chromium-based browser like Edge, Brave, etc.)
2. Navigate to `chrome://extensions/` in your address bar
3. Toggle **Developer mode** ON (switch is usually in the top-right corner)

### Step 3: Load the Extension
1. Click the **Load unpacked** button
2. Navigate to the folder containing this extension
3. Select the folder and click **Select Folder**

### Step 4: Verify Installation
You should now see the extension in your extensions list with the name **2xSpeed**!

## Usage

1. **Navigate** to any website with a video (e.g., YouTube, Netflix, etc.)
2. **Click** the extension icon in your browser toolbar
3. **Drag** the slider to select your desired playback speed (0.25x - 4x)
4. The video will automatically update to the selected speed!

## How It Works

The extension finds all `<video>` elements on the current page and adjusts their `playbackRate` property to your selected speed. The change applies instantly when you move the slider.

## Supported Speeds

- **0.25x** - Quarter speed (great for detailed analysis)
- **0.5x** - Half speed
- **1x** - Normal speed
- **1.5x** - 1.5x speed
- **2x** - Double speed
- **3x** - Triple speed
- **4x** - Quadruple speed

You can select any increment of 0.25 between these values.

## Troubleshooting

### Extension icon doesn't appear
- Make sure you've loaded the extension correctly
- Try refreshing the extensions page
- Check that Developer mode is enabled

### Speed doesn't change
- Ensure there's a video element on the page
- Try refreshing the page after loading the extension
- Some sites may override playback speed - this is a site-specific limitation