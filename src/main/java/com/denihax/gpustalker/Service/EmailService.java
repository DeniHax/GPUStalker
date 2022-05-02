package com.denihax.gpustalker.Service;

import com.denihax.gpustalker.Model.BestBuyModel;
import com.denihax.gpustalker.Model.EmailModel;

import com.denihax.gpustalker.Repository.EmailRepository;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public record EmailService(JavaMailSender javaMailSender,
                           BestBuyService bestBuyService,
                           EmailRepository emailRepository,
                           List<String> updateDates) {

    public List<String> findAllEmails() { return emailRepository.findAllEmails(); }

    public void addEmail(EmailModel emailModel) { emailRepository.save(emailModel);}

    public void emailUpdatedStock() throws Exception {

        SimpleMailMessage mailMessage = new SimpleMailMessage();

        List<BestBuyModel> gpu = bestBuyService.getAvailability()
                .stream()
                .filter(inStock -> inStock.getInStoreUpdate().substring(0, 10).equals(LocalDate.now().toString()))
                .toList();

        StringBuilder message = new StringBuilder("These graphics cards are now in stock\n");

        for(BestBuyModel inStock : gpu){
            message.append("\n")
                    .append(inStock.getName())
                    .append(" $")
                    .append(inStock.getPrice())
                    .append(" Add to cart link -> ")
                    .append(inStock.getAddtoCardUrl());
        }
        if(gpu.size() > 0) {
            for (String email : findAllEmails()) {
                mailMessage.setTo(email);
                mailMessage.setSubject("Now Available Graphics Cards!");
                mailMessage.setText(message.toString());
                javaMailSender.send(mailMessage);
            }
        }
    }
}



