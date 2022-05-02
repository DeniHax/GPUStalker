package com.denihax.gpustalker.Controller;

import com.denihax.gpustalker.Service.BestBuyService;
import com.denihax.gpustalker.Model.BestBuyModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1")
public class BestBuyController {

    BestBuyService bestBuyService;

    public BestBuyController(BestBuyService bestBuyService) {
        this.bestBuyService = bestBuyService;
    }

    @GetMapping("/all")
    public List<BestBuyModel> getAllGpu() throws Exception {return bestBuyService.getAllGPU();}

    @GetMapping("/sku/{sku}")
    public List<BestBuyModel> getBySku(@PathVariable("sku") Long sku) throws Exception {return bestBuyService.getBySku(sku);}

    @GetMapping("/{manufacturer}")
    public List<BestBuyModel> getByManufacturer(@PathVariable("manufacturer") String manufacturer) throws Exception {return bestBuyService.getByManufacturer(manufacturer);}

    @GetMapping("/val")
    public List<BestBuyModel> getAvailability() throws Exception { return bestBuyService.getAvailability(); }


}
