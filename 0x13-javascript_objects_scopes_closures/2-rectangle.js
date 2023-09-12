#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    // Check if either w or h is not a positive integer
    if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number' || !Number.isInteger(w) || !Number.isInteger(h)) {
      // Create an empty object
      return {};
    }

    // Assign properties if conditions are met
    this.width = w;
    this.height = h;
  }
}

module.exports = Rectangle;

