package com.denihax.gpustalker.Service;

import com.denihax.gpustalker.Model.BestBuyModel;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BestBuyService {

    private final Environment environment;

    private static final String BESTBUY_API_KEY = "BESTBUY_API_KEY";

    public BestBuyService(Environment environment) {
        this.environment = environment;
    }

    public BestBuyModel getAllData() throws Exception {

        RestTemplate restTemplate = new RestTemplate();
        ObjectMapper objectMapper = new ObjectMapper();

        objectMapper.enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);

        String hostURL = "https://api.bestbuy.com/v1/products(sku in(6407309, 6468926, 6429442, 6429434, 6465789, 6462956, 6454329, " +
                "6467808, 6471615, 6432400, 6434198, 6439299, 6444444, 6472637, 6468863, " +
                "6471285, 6465803, 6467497, 6471286, 6471287, 6462173, 6438279, " +
                "6452940, 6438278, 6441020, 6440913, 6444716, 6441172, 6472646, 6462266, " +
                "6447182, 6457632, 6430175, 6456926, 6430215, 6432446, 6432447, 6466931, " +
                "6467840, 6466932, 6467838, 6439127, 6460665, 6460666, 6439128, 6432445, " +
                "6452573, 6475237, 6475224, 6475226, 6475238, 6475223, 6475228, 6457993, " +
                "6468934, 6445108, 6453897, 6467788, 6471958, 6471957, 6467782, 6468932, " +
                "6467785, 6437909, 6468931, 6467779, 6466561, 6468925, 6468910, 6468928, " +
                "6439384, 6437912, 6442485, 6442484, 6453894, 6471960, 6457994, 6454689, " +
                "6453895, 6460664, 6453267, 6457619, 6474679, 6474545, 6453268, 6449499, " +
                "6474557, 6457624, 6441226, 6442077, 6444358, 6442585, 6444357, 6457622, " +
                "6457626, 6457620, 6445157, 6467289, 6454318))?apiKey=" + environment.getRequiredProperty(BESTBUY_API_KEY) + "&pageSize=100&format=json";

        ResponseEntity<String> response = restTemplate.exchange(
                hostURL,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<>() {}
        );

        return objectMapper.readValue(response.getBody(), new TypeReference<>() {});
    }

    public List<BestBuyModel> getAllGPU() throws Exception { return getAllData().getProducts(); }

    public List<BestBuyModel> getBySku(Long sku) throws Exception {

        return getAllGPU().stream()
                .filter(gpu -> gpu.getSku().equals(sku))
                .collect(Collectors.toList());
    }

    public List<BestBuyModel> getAvailability() throws Exception {

        return getAllGPU().stream()
                .filter(stock -> stock.getInStoreAvailability() || stock.getOnlineAvailability())
                .collect(Collectors.toList());

    }

    public List<BestBuyModel> getByManufacturer(String manufacturer) throws Exception {

        return getAllGPU().stream()
                .filter(gpu -> gpu.getManufacturer().equals(manufacturer))
                .collect(Collectors.toList());

    }

}
