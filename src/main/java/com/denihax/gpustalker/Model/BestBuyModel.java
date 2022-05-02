package com.denihax.gpustalker.Model;

import com.fasterxml.jackson.annotation.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class BestBuyModel {

    @JsonProperty("products")
    @JsonUnwrapped
    private List<BestBuyModel> products;

    @JsonProperty("sku")
    @JsonUnwrapped
    private Long sku;

    @JsonProperty("name")
    @JsonUnwrapped
    private String name;

    @JsonProperty("regularPrice")
    @JsonUnwrapped
    private BigDecimal price;

    @JsonProperty("image")
    @JsonUnwrapped
    private String image;

    @JsonProperty("thumbnailImage")
    @JsonUnwrapped
    private String thumbnailImage;

    @JsonProperty("inStoreAvailability")
    @JsonUnwrapped
    private Boolean inStoreAvailability;

    @JsonProperty("onlineAvailability")
    @JsonUnwrapped
    private Boolean onlineAvailability;

    @JsonProperty("longDescription")
    @JsonUnwrapped
    private String description;

    @JsonProperty("manufacturer")
    @JsonUnwrapped
    private String manufacturer;

    @JsonProperty("addToCartUrl")
    @JsonUnwrapped
    private String addtoCardUrl;

    @JsonProperty("startDate")
    @JsonUnwrapped
    private String startDate;

    @JsonProperty("inStoreAvailabilityUpdateDate")
    @JsonUnwrapped
    private String inStoreUpdate;

    @JsonProperty("onlineAvailabilityUpdateDate")
    @JsonUnwrapped
    private String onlineUpdate;


}
