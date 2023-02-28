package lk.easycarrental.spring.service;

import lk.easycarrental.spring.dto.PaymentDTO;

import java.util.List;

public interface PaymentService {

    String generatePaymentId();

    void savePayment(PaymentDTO dto);

    void updatePayment(PaymentDTO dto);

    void deletePayment(String paymentID);

    PaymentDTO searchPayment(String paymentID);

    List<PaymentDTO> getAllPayments();

    List<PaymentDTO> getAllPaymentsByDaily();

    List<PaymentDTO> getAllPaymentsByWeekly();



}
