# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- compareAmount
- formatAmount with USD support
- isAmountNegative
- isAmountZero

### Changed

- Renamed addAmount to addAmounts
- sumAmounts now expects an Amount[] parameter

### Fixed

- Incorrect output for negative values for floatToAmount
- isAmountPositive incorrectly returning true for negative subdecimal values e.g. -0.01

## [1.0.0-alpha.2] - 2022-08-18

### Fixed

- Amount type to not support more than 2 subdecimal digits.