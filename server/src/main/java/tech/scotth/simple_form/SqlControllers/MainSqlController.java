package tech.scotth.simple_form.SqlControllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tech.scotth.simple_form.SqlModels.Customer;
import tech.scotth.simple_form.SqlRepository.CustomerRepository;

@RestController // Changed to @RestController to return direct responses
@RequestMapping(path="/database")
@CrossOrigin
public class MainSqlController {
    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping(path = "/addCustomer")
    public ResponseEntity<Map<String, String>> addNewCustomer(@RequestBody Customer customer) {
        customerRepository.save(customer);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Customer added successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping(path="/searchCustomer")
    public @ResponseBody Iterable<Customer> searchCustomer(@RequestParam(required = false, defaultValue="") String query) {
        if(query.isEmpty()) {
            return customerRepository.findAll();
        }
        return customerRepository.findByNameOrEmailContaining(query);
    }

    @GetMapping(path="/test")
    public String hello() {
        return "Test";
    }
}
