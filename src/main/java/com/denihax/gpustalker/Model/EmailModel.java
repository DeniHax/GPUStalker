package com.denihax.gpustalker.Model;

import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import javax.validation.constraints.Email;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table
@Component
public class EmailModel {

    @Id
    @SequenceGenerator(
            name = "email_sequence",
            sequenceName = "email_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "email_sequence",
            strategy = GenerationType.SEQUENCE)
    private Long id;

    @Email
    private String emailAddress;

    public EmailModel(String emailAddress) {
        this.emailAddress = emailAddress;
    }
}
