/* global Log, Module, moment */

/* Magic Mirror
 * Module: MMM - yrWeather
 *
 * By wkrawiec https://wkrawiec.pl
 * MIT Licensed.
 *
 */

Module.register("MMM-yrWeather", {
  // Module config defaults.
  defaults: {
    location: "",
    url: "https://www.yr.no/place/",
    fileName: "meteogram.png",
    updateInterval: 1000 * 60 * 30 // 30 minutes
  },

  // Define required scripts.
  getStyles() {
    return ["MMM-yrWeather.css"];
  },

  // Define start sequence.
  start() {
    Log.info("Starting module: " + this.name);

    // Schedule update timer.
    setInterval(() => {
      this.updateDom();
    }, this.config.updateInterval);
  },

  generateUniqueId() {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    );
  },

  // Override dom generator.
  getDom() {
    if (this.config.location !== "") {
      const wrapper = document.createElement("div");
      const weatherImg = document.createElement("img");

      weatherImg.src = `${this.config.url}${this.config.location}/${
        this.config.fileName
      }?${this.generateUniqueId()}`;
      wrapper.className = "yr-weather";
      wrapper.appendChild(weatherImg);

      return wrapper;
    }
  }
});
