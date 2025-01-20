package tech.scotth.simple_form.SqlRepository;


import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import tech.scotth.simple_form.SqlModels.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {


    @Query("SELECT c FROM Customer c WHERE c.name LIKE %:query% OR c.email LIKE %:query%")
    List<Customer> findByNameOrEmailContaining(@Param("query") String query);
}