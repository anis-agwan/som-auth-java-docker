package bu.som.assessment.login.registration.service;

import bu.som.assessment.login.registration.entity.EmailDetails;

public interface EmailServiceIntf {
    String sendSimpleMail(EmailDetails emailDetails);
//    String sendEmailWithAttachments(EmailDetails emailDetails);
}
