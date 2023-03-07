package lk.easycarrental.spring.entity;


import java.time.LocalDate;

public interface CustomEntity {
   LocalDate getDate();
   Double getWeek();
   Double getIncome();
   String getMonthName();
}
