package lk.easycarrental.spring.service.impl;


import lk.easycarrental.spring.repo.PaymentRepo;
import lk.easycarrental.spring.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    PaymentRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public String generatePaymentId() {
        String lastId = repo.generatePaymentId();
        String id = "";

        if (lastId != null) {
            int tempId = Integer.parseInt(lastId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                id = "PAY-000" + tempId;
            } else if (tempId <= 99) {
                id = "PAY-00" + tempId;
            } else if (tempId <= 999) {
                id = "PAY-0" + tempId;
            } else if (tempId <= 9999) {
                id = "PAY-" + tempId;
            }
        } else {
            id = "PAY-0001";
        }
        return id;
    }
}
