package com.denihax.gpustalker.Controller;

import com.denihax.gpustalker.Model.EmailModel;
import com.denihax.gpustalker.Service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/emails")
public class EmailController {

    private final EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @Scheduled(fixedRate = 86400000)
    public void sendEmail() throws Exception { emailService.emailUpdatedStock();}

    @PostMapping
    public void sendEmailAddress(@RequestBody EmailModel emailModel) { emailService.addEmail(emailModel); }

}
