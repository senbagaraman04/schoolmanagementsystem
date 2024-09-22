package com.rams.smsservice.controller;

import com.rams.smsservice.models.Branch;
import com.rams.smsservice.models.CreateBranchRequest;
import com.rams.smsservice.service.BranchService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;



import java.util.List;

@RequestMapping("/branch")
@RestController
@AllArgsConstructor
@Validated
public class BranchController {

    private final BranchService branchService;

    @GetMapping
    public ResponseEntity<List<Branch>> getAllBranches() {
        return ResponseEntity.ok(branchService.getAllBranches());
    }
    
   @PostMapping
    public ResponseEntity<Branch> createBranch(@RequestBody CreateBranchRequest createBranchRequest) {
        return ResponseEntity.ok(branchService.createBranch(createBranchRequest));
    }

    @GetMapping("/{branchId}")
    public ResponseEntity<Branch> getBranchById(@PathVariable String branchId) {
        return ResponseEntity.ok(branchService.getBranchById(branchId));
    }
}
