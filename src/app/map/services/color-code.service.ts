import {Injectable} from "@angular/core";
import {ColorData, ColorFunctions, numberLayerShortNames} from "../types";

export function getColor(values, colors, d) {
    let result;
    if (d === 0) {
        result = "rgba(200,200,200,0.5)";
    } else {
        for (let i = 0; i < values.length; i++) {
            if (d > values[i]) {
                result = colors[i];
                break;
            }
        }
        if (!result) {
            result = colors[colors.length - 1];
        }
    }
    return result;
}


@Injectable({
                providedIn: "root"
            })
export class ColorCodeService {

    public colorData: ColorData = {
        exceedance: {values: [4, 3, 2, 1], colors: [ "#A50F15", "#DE2D26", "#FB6A4A" , "#FCAE91", "#FEE5D9"]},
        count:      {values: [150, 50, 20, 10], colors: ["#045A8D", "#2B8CBE", "#74A9CF", "#BDC9E1", "#F1EEF6"]}
    };

    public colorFunctions: ColorFunctions = {exceedance: null, count: null};

    constructor() {
        // Set up the color functions for the legend
        const newColorFunctions: ColorFunctions = {exceedance: null, count: null};
        for (const key of numberLayerShortNames) {
            newColorFunctions[key] = {
                getColor:        getColor.bind(newColorFunctions[key], this.colorData[key].values,
                                               this.colorData[key].colors),
                getFeatureStyle: ((values, colors, layerType, feature) => {
                    if (feature) {
                        const d = (feature.properties[layerType]) ? feature.properties[layerType] : 0;
                        return {
                            fillColor:   getColor(values, colors, d),
                            weight:      1,
                            opacity:     0.5,
                            color:       "#ddd",
                            dashArray:   "",
                            fillOpacity: (d === 0) ? 1.0 : 0.7,
                            className:   ("x-feature-name-" + feature.properties.name).replace(/ +/g, "-") + " app-map-region-geography"
                        };
                    }
                }).bind(newColorFunctions[key], this.colorData[key].values,
                        this.colorData[key].colors,
                        key)
            };
        }
        // This assignment triggers the change to the legend
        this.colorFunctions = newColorFunctions;

    }
}
