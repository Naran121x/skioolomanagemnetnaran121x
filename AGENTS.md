# Architecture rules

- Role simulation is presentation-only; navigate to the shared dashboard before changing the simulated role so restricted pages never render under the new role. This is not authentication or server authorization.
- Animate a keyed content wrapper by pathname and simulated role, leaving the shared shell mounted and honoring reduced-motion preferences to avoid layout disruption.