# Module: MMM-yrWeather

Module show YR Weather for your location in MagicMirror.

## Usage

You need to install the module for your MagicMirror.

### Installation

Navigate into your MagicMirror's modules folder:

```
cd ~/MagicMirror/modules
```

Clone this repository:

```
git clone https://github.com/wkra/MMM-yrWeather.git
```

Now you nedd to configure module in your config.js file.

### Configuration

To run MMM-yrWeather module, you need to add the following data to your config.js file.

```
{
  module: 'MMM-yrWeather',
  position: 'top_right', // you may choose any location
  config: {
    location: 'Poland/Lesser_Poland/Kraków', // required
    updateInterval: 1800000 // optional (1000 * 60 * 30 = 1800000 = 30 minutes)
  }
}
```

### Find your location

To find your location go to: `https://www.yr.no/` (you can change language to english in right top corner), find location and copy from url value after: `https://www.yr.no/place/` e.g. `Poland/Lesser_Poland/Kraków`
