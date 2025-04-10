# IMG2WEBP
- Simple node library to convert images to webp format

## Install

```bash
npm i @zakhov/img2webp --save-dev
```

## Usage
- in your project's package.json add the following script:

```json
{
  "scripts": {
    "webp": "img2webp"
  }
}
```

- then run the script with the following command:

```bash
npm run webp
```
This will result in .webp copies on any .png or .jpg file that are in the same path .

## Options

To change config, include the `"img2webp"` property in package.json

### Target image files based on extension by glob pattern
Use glob patterns to look for images within project source folder.

```json
{
  "img2webp": {
    "src": "src/**/*.{png,jpg}"
  }
}
```
Running with this configuration will create .webp copies alongside .png and .jpg files in the /src folder