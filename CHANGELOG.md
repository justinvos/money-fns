# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2022-10-25

### Added

- multiplyAmount with support for amounts

### Changed

- Renamed multiplyAmount to scaleAmount

## [1.0.1] - 2022-08-19

### Removed

- Banner image from npm package files

## [1.0.0] - 2022-08-19

### Added

- compareAmount
- discountAmount
- formatAmount with USD support
- isAmountNegative
- isAmountZero
- isValidAmount

### Changed

- Renamed addAmount to addAmounts
- sumAmounts now expects an Amount[] parameter

### Fixed

- Incorrect output for negative values for floatToAmount
- isAmountPositive incorrectly returning true for negative subdecimal values e.g. -0.01
- Amount type to not support more than 2 subdecimal digits.
