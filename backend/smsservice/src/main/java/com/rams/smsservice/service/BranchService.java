package com.rams.smsservice.service;

import com.rams.smsservice.models.Branch;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BranchService {
    public List<Branch> getAllBranches() {
        List<Branch> branches = List.of(
                new Branch("1", "Branch 1", "Location 1", null, null, null),
                new Branch("2", "Branch 2", "Location 2", null, null, null)
        );

        return branches;
    }
}
