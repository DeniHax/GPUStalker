package com.denihax.gpustalker.Repository;

import com.denihax.gpustalker.Model.EmailModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmailRepository extends JpaRepository<EmailModel, Long> {

    @Query(value = "SELECT em.email_address " +
                    "FROM email_model em",
            nativeQuery = true)
    List<String> findAllEmails();
}
